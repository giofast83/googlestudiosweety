import fs from "fs";
import path from "path";
import sharp from "sharp";

const roots = [
  path.resolve(process.cwd(), "public", "images", "Collezione Africa"),
  path.resolve(process.cwd(), "public", "images", "upcycling")
];

const run = async () => {
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    const files = fs.readdirSync(root).filter((f) => /\.(png|jpe?g)$/i.test(f));

    for (const file of files) {
      const inPath = path.join(root, file);
      const base = file.replace(/\.(png|jpe?g)$/i, "");
      const jpgOut = path.join(root, `${base}.jpg`);
      const webpOut = path.join(root, `${base}.webp`);

      if (!fs.existsSync(jpgOut)) {
        await sharp(inPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(jpgOut);
      }
      if (!fs.existsSync(webpOut)) {
        await sharp(inPath)
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(webpOut);
      }
    }
  }
};

run();
