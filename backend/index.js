const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', uploadRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));