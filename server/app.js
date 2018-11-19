const kuromoji = require('./kuromoji');

// POST /tokens
async function getTokens(req, res) {
  try {
    const response = await kuromoji.tokenize(req.body.content);
    res.json(response);
  } catch(e) {
    res.status(500);
    res.send(error);
  }
}

module.exports = { getTokens };
