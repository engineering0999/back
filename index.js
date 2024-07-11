const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/get', async (req, res) => {
    const { htno } = req.query;
    if (!htno) {
        return res.status(400).send({ error: 'htno parameter is required' });
    }
    try {
        const response = await axios.get(`https://jntuhresults.up.railway.app/api/academicresult?htno=${htno}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    
});
