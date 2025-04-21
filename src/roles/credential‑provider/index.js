const express = require('express');

exports.start = async function start () {
  const app = express();
  app.get('/', (_req, res) => res.send('🏭  Credential Provider alive'));
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`🏭  Provider on http://localhost:${PORT}`));
};
