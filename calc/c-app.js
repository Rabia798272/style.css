const express = require ('express');
const bodyParser = require ('body-Parser')
const path = require ('path');

const app = express();
app.use(express.static(path.join(_dirname,'public')));
app.use(bodyParser.url encoded({extended:true}));

app.post('/calc',(req,res) => {
    const num1 = parseFloat(req.res.num1);
    const num2 = parseFloat(req.res.num2);

    const operation = req.body.operation;

    let result;
    if (operation==='add') {
        result = num1 +num2;
    } else
    if (operation==='sub') {
        result = num1-num2;
        }
        console.log(result);
        res.send('<h1> Result : $ {result} <h1> <a href = "/"> Go Back </a>');
    });
    app.listen (3000,() => {
        console.log('Server running on http://Localhost:3000');
    });