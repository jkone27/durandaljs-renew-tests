const express = require('express')
const app = express()
const port = 5000

app.use(express.static('lib'));
//app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/lib/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})