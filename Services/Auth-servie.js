const express = require('express');
const app = express();

app.use(express.json());

app.get('/auth', (req, res) => {
  res.json({ service: 'auth-multiport', message: 'GET: Auth success' });
});

app.post('/auth/login', (req, res) => {
  res.json({ service: 'auth-multiport', message: 'POST: Auth login success', body: req.body });
});

const ports = [5007, 5008, 5009];

ports.forEach(port => {
  app.listen(port, () => {
    console.log(`Auth server listening on port ${port}`);
  });
});
