const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'))
//controllers
const pies = require('./controllers/pieController');
const user = require('./controllers/userController');


//send out an html file
// app.use(express.static(__dirname + '/public'));

//render the static file from the endpoint '/'
// app.get('/',(req,res) => res.render('index'));
app.use('/pies', pies);
app.use('/auth',user);


app.listen(process.env.PORT, () => console.log('we gravy'));