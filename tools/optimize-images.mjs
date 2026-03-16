import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve(process.cwd(), "public", "images", "Collezione Africa");
const files = fs.readdirSync(root).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

const run = async () => {
  for (const file of files) {
    const inPath = path.join(root, file);
    const base = file.replace(/\.(png|jpg|jpeg)$/i, "");
    const jpgOut = path.join(root, `${base}.jpg`);
    const webpOut = path.join(root, `${base}.webp`);

    await sharp(inPath).resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 80, progressive: true }).toFile(jpgOut);
    await sharp(inPath).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 75 }).toFile(webpOut);
  }
};

run();

