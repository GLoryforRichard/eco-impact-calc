const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/calculate', (req, res) => {
    const { activity, amount, unit } = req.body;

    const co2Emission = amount * 0.5;

    res.json({ co2Emission });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});