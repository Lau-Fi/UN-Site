const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/', (req1, res) => {
    res.sendFile('index.html', (err) => {
        if(err){
            console.log(err);
        }
    });
});

app.post('/hello', jsonParser, (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    res.send('POST: Name: ' + name + ', email: ' + email);
});

app.post('/form', jsonParser, (req,res) => {
    const body = req.body;
    const fname = body.fname;
    const lname = body.lname;
    const email = body.email;
    const comment = body.comment;
    res.send(`Information taken:\nFirst Name = ${fname}\nLast Name = ${lname}\nEmail = ${email}\nComment = ${comment}`)
})

app.listen(port, () => {
    console.log("Listening on PORT: 3000")
});