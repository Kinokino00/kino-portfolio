// you can see more info at https://github.com/tschaub/gh-pages
// const path = require('path');
// const ghpages = require('gh-pages');
import fs from 'fs';
import path from 'path';
import ghpages from 'gh-pages';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/Kinokino00/kino-portfolio.git'
};

const sourceDir = path.resolve(__dirname, '../src/assets/images/icon');
const distDir = path.resolve(__dirname, '../dist/assets/images/icon');

const skillList = [
    'Java', 'Vue', 'Python', 'Tailwindcss', 'Selenium',
    'Typescript', 'BeautifulSoup', 'Javascript'
];

fs.mkdirSync(distDir, { recursive: true });

for (const skill of skillList) {
    const exts = ['.png', '.jpg', '.jpeg', '.svg'];
    let copied = false;
    for (const ext of exts) {
        const sourceFile = path.join(sourceDir, `${skill}${ext}`);
        if (fs.existsSync(sourceFile)) {
            const targetFile = path.join(distDir, `${skill}${ext}`);
            fs.copyFileSync(sourceFile, targetFile);
            console.log(`✅ Copied: ${skill}${ext}`);
            copied = true;
            break;
        }
    }
    if (!copied) console.warn(`⚠️  Not found: ${skill}.*`);
}

console.log('🟢 All skill icons copied to /dist/assets/images/icon/');

const callback = err => {
    if (err) console.error(err);
    else console.log('🚀 publish success');
};

ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);
