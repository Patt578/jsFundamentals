require('dotenv').config();
let express = require('express');
let app = express();
let test = require('./controllers/testcontroller');
let user = require('./controllers/usercontroller');
let sequelize = require('./db');
sequelize.sync();
app.use(express.json());



app.use('/test', test);
app.use('/api/user', user);



app.listen(3000, function(){
    console.log('yeet');
})

app.use('/api/test', function(req, res){
    res.send("yeet!");
   });



   
 