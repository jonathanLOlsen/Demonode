const express = require('express');

exports.start = async function start () {
  const app = express();
  app.get('/', (_req, res) => res.send('Wallet alive'));
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Wallet on http://localhost:${PORT}`));
};
