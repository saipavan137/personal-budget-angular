const express = require('express');
const app = express();
const port = 3000;
app.use('/',express.static('public'));

const budget = {
    mybudget: [
        {
            title: 'Eat out',
            budget: 250
        },
        {
            title: 'Rent',
            budget: 100
        },
        {
            title: 'Groceries',
            budget: 300
        },
    ]
};

app.get('/budget',(req , res) => {
    res.json(budget);
}) 
app.listen(port, () => {
    console.log('Example app listening at https://localhost:${port}');
})