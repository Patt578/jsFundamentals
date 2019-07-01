var express = require('express');
var router = express.Router();  

let contact = {
    user: 'tom',
    email: 'chickmagnet420@gmail.com'
};



router.get('/', function (req, res) {
  res.send(contact);
});


module.exports = router;