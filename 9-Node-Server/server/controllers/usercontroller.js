var express = require('express');
var router = express.Router();  
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');


router.post('/createuser', function (req, res) {
  
  let username = req.body.user.username;
  let pass = req.body.user.password;

  User.create({
    username: username,
    passwordhash: bcrypt.hashSync(pass,10)
    }).then(
    function createSuccess(user){

let token = jwt.sign({id:user.id}, process.env.JWT_SECRET,{expiresIn:60*60*24});

      res.json({
        user: user,
        message: 'created',
        sessionToken: token
      });
    },
    function createError(err){
      res.send(500, err.message);
    }
  );
});

router.post('/signin', function(req,res){

  User.findOne({where:{username: req.body.user.username}}).then(

    function(user){
      if(user){

        bcrypt.compare(req.body.user.password,user.passwordhash,function(err,matches){
        
          if(matches){
          console.log("The value matches: ", matches);
          let token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:60*60*24});
          res.json({
            user:user,
            message: "success!",
            sessionToken: token
          });
          }
        })
       
      }else{
        res.status(500).send({error:"you failed, yo"});
      }
    }
  );
});


module.exports = router;