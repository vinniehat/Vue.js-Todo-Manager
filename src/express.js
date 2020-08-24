const express = require('express')
const app = express()
const port = 8081;
const cors = require("cors");
var bodyParser = require('body-parser')

connection.connect();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors());

Uncomment before pushing for the final release of that version
app.use(express.static('./dist'));

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
