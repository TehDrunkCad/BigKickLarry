const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.use('/public',express.static(__dirname + '/public'))
app.use('/js',express.static(__dirname + '/js'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));