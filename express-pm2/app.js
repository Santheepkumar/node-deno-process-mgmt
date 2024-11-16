const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello from PM2 cluster! Instance: ${process.env.NODE_APP_INSTANCE}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});