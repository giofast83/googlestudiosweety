import fs from "fs";
import path from "path";
import sharp from "sharp";

const defaultRoot = path.resolve(process.cwd(), "public", "images", "Collezione Africa");
const DEFAULT_CROP_PX = 163;
const argv = process.argv.slice(2);
const cropArgs = [];
const onlyBases = new Set();
let rootOverride = null;
const onlyFiles = [];
for (let i = 0; i < argv.length; i += 1) {
  const arg = argv[i]?.toString() ?? "";
  if (arg === "--dir") {
    rootOverride = (argv[i + 1]?.toString() ?? "").trim();
    i += 1;
    continue;
  }
  if (arg.startsWith("--dir=")) {
    rootOverride = arg.slice("--dir=".length).trim();
    continue;
  }
  if (arg === "--files") {
    const value = argv[i + 1]?.toString() ?? "";
    i += 1;
    for (const part of value.split(",")) {
      const trimmed = part.trim();
      if (trimmed) onlyFiles.push(trimmed);
    }
    continue;
  }
  if (arg.startsWith("--files=")) {
    const value = arg.slice("--files=".length);
    for (const part of value.split(",")) {
      const trimmed = part.trim();
      if (trimmed) onlyFiles.push(trimmed);
    }
    continue;
  }
  if (arg === "--only") {
    const value = argv[i + 1]?.toString() ?? "";
    i += 1;
    for (const part of value.split(",")) {
      const trimmed = part.trim();
      if (trimmed) onlyBases.add(trimmed);
    }
    continue;
  }
  if (arg.startsWith("--only=")) {
    const value = arg.slice("--only=".length);
    for (const part of value.split(",")) {
      const trimmed = part.trim();
      if (trimmed) onlyBases.add(trimmed);
    }
    continue;
  }
  cropArgs.push(arg);
}
if (cropArgs.length === 0) cropArgs.push(`${DEFAULT_CROP_PX}px`);
const DEFAULT_DPI = 96;
const root = rootOverride ? path.resolve(process.cwd(), rootOverride) : defaultRoot;

const cmToPx = (cm, dpi) => Math.max(1, Math.round((cm / 2.54) * dpi));
const parsePartPx = (dpi, raw) => {
  const arg = raw.toString().trim().toLowerCase();

  if (arg.endsWith("px")) {
    const px = Number.parseInt(arg.replace(/px$/i, ""), 10);
    if (!Number.isFinite(px) || px <= 0) throw new Error(`Parametro non valido: ${raw}`);
    return px;
  }

  const cm = Number.parseFloat(arg);
  if (!Number.isFinite(cm) || cm <= 0) throw new Error(`Parametro non valido: ${raw}`);
  return cmToPx(cm, dpi);
};
const parseCropPx = (dpi) => cropArgs.reduce((sum, raw) => sum + parsePartPx(dpi, raw), 0);

const normalizeBase = (raw) => {
  const input = raw.toString().trim();
  if (!input) return null;

  const matchAfrica = input.match(/^Africa_(\d+)$/i);
  if (matchAfrica) return `Africa_${matchAfrica[1].padStart(2, "0")}`;

  const matchDigits = input.match(/^(\d+)$/);
  if (matchDigits) return `Africa_${matchDigits[1].padStart(2, "0")}`;

  return null;
};

const listBases = () => {
  const entries = fs.readdirSync(root);
  const bases = new Set();
  for (const file of entries) {
    const match = file.match(/^(Africa_\d+)\.(png|jpe?g|webp)$/i);
    if (match) bases.add(match[1]);
  }
  return Array.from(bases).sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
};

const pickSource = (base) => {
  const png = path.join(root, `${base}.png`);
  if (fs.existsSync(png)) return png;
  const jpg = path.join(root, `${base}.jpg`);
  if (fs.existsSync(jpg)) return jpg;
  const jpeg = path.join(root, `${base}.jpeg`);
  if (fs.existsSync(jpeg)) return jpeg;
  return null;
};

const cropBottomInPlace = async (filePath) => {
  const img = sharp(filePath, { failOn: "none" });
  const meta = await img.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  if (width <= 0 || height <= 0) throw new Error(`Impossibile leggere dimensioni: ${filePath}`);

  const dpi = meta.density ?? DEFAULT_DPI;
  const cropPx = parseCropPx(dpi);
  const outHeight = Math.max(1, height - cropPx);

  const ext = path.extname(filePath).toLowerCase();
  const tmpPath = `${filePath}.tmp`;

  let pipeline = sharp(filePath, { failOn: "none" })
    .extract({ left: 0, top: 0, width, height: outHeight })
    .withMetadata();

  if (ext === ".png") pipeline = pipeline.png();
  if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 90, progressive: true });

  await pipeline.toFile(tmpPath);
  fs.renameSync(tmpPath, filePath);

  return { dpi, cropPx, width, height, outHeight };
};

const deleteIfExists = (filePath) => {
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
};

const run = async () => {
  if (onlyFiles.length > 0) {
    for (const raw of onlyFiles) {
      const filePath = path.isAbsolute(raw) ? raw : path.join(root, raw);
      if (!fs.existsSync(filePath)) throw new Error(`File non trovato: ${filePath}`);
      const { dpi, cropPx, width, height, outHeight } = await cropBottomInPlace(filePath);
      console.log(`${path.basename(filePath)}: -${cropPx}px (dpi=${dpi}) ${width}x${height} -> ${width}x${outHeight}`);
    }
    return;
  }

  const bases = listBases();
  const normalizedOnlyBases = Array.from(onlyBases)
    .map(normalizeBase)
    .filter(Boolean);
  const basesToProcess =
    normalizedOnlyBases.length > 0 ? bases.filter((b) => normalizedOnlyBases.includes(b)) : bases;
  if (bases.length === 0) {
    console.log("Nessun file Africa_* trovato.");
    return;
  }

  for (const base of basesToProcess) {
    const source = pickSource(base);
    if (!source) continue;

    const { dpi, cropPx, width, height, outHeight } = await cropBottomInPlace(source);
    const usedPng = source.toLowerCase().endsWith(".png");

    const jpgPath = path.join(root, `${base}.jpg`);
    const webpPath = path.join(root, `${base}.webp`);

    if (usedPng) {
      deleteIfExists(jpgPath);
      deleteIfExists(webpPath);
    } else {
      deleteIfExists(webpPath);
    }

    console.log(`${path.basename(source)}: -${cropPx}px (dpi=${dpi}) ${width}x${height} -> ${width}x${outHeight}`);
  }
};

run();
