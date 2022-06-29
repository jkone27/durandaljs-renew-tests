const express = require('express')
const app = express()
const port = 5000

app.use(express.static('wwwroot'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/wwwroot/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})