const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');
const path = require('path');
const { createGroupAndQuote } = require('../utils/ideonApi');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload-census', upload.single('file'), async (req, res) => {
  const filePath = path.join(__dirname, '..', req.file.path);
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        const quoteResults = await createGroupAndQuote(results);
        res.json(quoteResults);
      } catch (err) {
        res.status(500).json({ error: 'Failed to create quote', details: err });
      }
    });
});

module.exports = router;