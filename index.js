// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3300;

app.get('/', (req, res) => {
    res.send('Hello, Jenkins CI/CD Pipeline!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
