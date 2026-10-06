// Capture d'une section du site, animations de scroll comprises.
// Usage: node scripts/shoot.mjs <url> <#ancre> <sortie.png>
import puppeteer from "puppeteer-core";
import { existsSync } from "fs";

function findChrome() {
  const fromEnv = process.env.PUPPETEER_EXECUTABLE_PATH;
  if (fromEnv) return fromEnv;
  const candidates = [
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  ];
  const found = candidates.find((c) => existsSync(c));
  if (!found) throw new Error("Chrome introuvable");
  return found;
}

const [url, anchor, out] = process.argv.slice(2);

const browser = await puppeteer.launch({
  executablePath: findChrome(),
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 1100 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

// Descendre par paliers pour declencher les IntersectionObserver de chaque section.
await page.evaluate(async () => {
  const step = window.innerHeight / 2;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
});
await new Promise((r) => setTimeout(r, 1200));

const target = anchor.replace(/^#/, "");
const box = await page.evaluate((id) => {
  const el = document.getElementById(id);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: r.top + window.scrollY, height: r.height };
}, target);

if (!box) {
  console.error(`section #${target} introuvable`);
  await browser.close();
  process.exit(2);
}

await page.evaluate((y) => window.scrollTo(0, y), box.top);
await new Promise((r) => setTimeout(r, 900));

await page.screenshot({
  path: out,
  clip: { x: 0, y: box.top, width: 1400, height: Math.min(box.height, 14000) },
  captureBeyondViewport: true,
});
console.log(`capture: ${out}  (hauteur section ${Math.round(box.height)}px)`);
await browser.close();
