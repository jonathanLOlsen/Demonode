const express = require('express');

exports.start = async function start () {
  const app = express();
  app.get('/', (_req, res) => res.send('✅  Relying Party alive'));
  const PORT = process.env.PORT || 5002;
  app.listen(PORT, () => console.log(`✅  Relying Party on http://localhost:${PORT}`));
};
