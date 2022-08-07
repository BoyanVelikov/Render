const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/register', (req, res) => {
    const {name, location} = req.body;
    res.send(`Name ${name} and location ${location} submitted successfully!`);
});

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});