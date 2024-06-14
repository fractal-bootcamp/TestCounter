const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5002; // Use the port provided by environment or default to 5000

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../react-counter/build')));

// API endpoint to increment count
app.post('/api/increment', (req, res) => {
    let count = req.body.count;
    count++;
    res.json({ count });
});

// Handle any other requests that don't match the API endpoint
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../react-counter/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
