const express = require ('express');
const config = require ('./config');
const endpoints =require('./endpoints');
//var path =require('path');
const app = express ();
const port = 3000;

config.setup(app);
endpoints.routes(app);



 app.listen(port, () => console.log ('server running'))


 //npm install hbs --save  es para que nos ponga libreria en hb modules parecea archivos html y ponerselos a quien persigue