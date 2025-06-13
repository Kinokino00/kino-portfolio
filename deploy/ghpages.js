// you can see more info at https://github.com/tschaub/gh-pages
// const path = require('path');
// const ghpages = require('gh-pages');
import path from 'path';
import ghpages from 'gh-pages';
import { fileURLToPath } from 'url';

// 獲取當前文件的目錄名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/Kinokino00/kino-portfolio.git'
};

const callback = err => {
    if (err) console.error(err);
    else console.log('publish success');
};

/**
 * This task pushes to the `gh-pages` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);