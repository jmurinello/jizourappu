const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function tokenize(string) {
  const paragraphs = string.split(/\n/);
  const pwd = path.resolve(__dirname, '../kuromoji/');
  const cmd = 'java -Dfile.enconding=UTF-8 -cp '
    + 'target/kuromoji-0.9.0.jar:src/main/java KuromojiExample';

  const tokens = paragraphs.map(async (paragraph) => {
    const { stdout, stderr } = await exec(`${cmd} ${paragraph}`, { cwd: pwd });
    if (stderr) { console.error(`error: ${stderr}`); } // eslint-disable-line no-console
    return stdout.split(/\n/);
  });

  const content = await Promise.all(tokens);
  return content;
}

module.exports = {
  tokenize,
};
