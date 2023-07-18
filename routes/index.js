const express = require('express');
const { register } = require('../controllers/authController');
const router = express.Router();

/* GET home page. */
router
.get('/', function(req, res, next) {
  res.status(200).json({
    ok:true,
    message : "Done!"
  });
})

.post('/api/register', register)

module.exports = router;
