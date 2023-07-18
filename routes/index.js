const express = require('express');
const { register, login } = require('../controllers/authController');
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
.post('/api/login', login)

module.exports = router;
