let express = require('express');
let router = express.Router();
let sequelize = require('../db');
let TestModel = sequelize.import('../models/test');


//Method one
router.post('/one', function(req, res){
  res.send('got a post request.')
});

//Method two
router.post('/two', function(req,res){
  let testData = 'Test data for endpoint two';

TestModel
.create({
  testdata: testData
}).then(dataFromDatabase =>{
  res.send('Test two went through?')

  })

});


//Method three uses req.body
router.post('/three', function(req,res){
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    res.send("three went through!");
    console.log("three success");
});
module.exports = router;

//Method four uses .then() after .create() to handle errors better
router.post('/four', function(req,res){
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
    .then(
      function message(){
        res.send("test 4 went through");
      }
    );
});

//Method five return data as a promise
router.post('/five', function(req,res){
  let testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(
        function message(data){
          res.send(data);
        }
      );
});

//Method six return data as a promise in json format

router.post('/six', function(req,res){
  let testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(
        function message(testdata){
          res.json({
            testdata: testdata
          });
        }
      );
});

//Method seven error handling

router.post('/seven', function(req,res){
  let testData = req.body.testdata.item;
    TestModel
      .create({
        testdata: testData
      })
      .then(
      
        function createSuccess(testdata){
              res.json({
                testdata: testdata
              });
        },
        function createError(err){
          res.send(500, err.message);
        }
      );
});