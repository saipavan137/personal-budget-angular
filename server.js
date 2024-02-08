const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
const fs = require('fs');
app.get('/budget',(req , res) => {
    fs.readFile('budget.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const budget = JSON.parse(data);
        res.json(budget);
    });
});

app.listen(port, () => {
    console.log('Example app listening at https://localhost:${port}');
}) 