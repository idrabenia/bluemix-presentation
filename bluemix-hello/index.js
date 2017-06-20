const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// Required port provided using environment variable PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));