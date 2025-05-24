// user-service.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/user', (req, res) => {
  res.json({ service: "User Service", status: "OK" });
});
app.post('/users', (req, res) => {
  res.json({ service: "User Service", status: "got it" });
});

app.listen(5002, () => console.log("User service running on port 5002"));
