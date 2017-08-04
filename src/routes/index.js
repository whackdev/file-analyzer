const express = require('express');
const router = express.Router();

router.get('/', (err, res) => {
	res.send('API works');
});

module.exports = router;