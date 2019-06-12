const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api/api'); 
const student_api = require('./api/routers/student.router');
const db = require('./db/db.config');
env = process.env;
port = env.myapp_port || 3000;
http = require('http');
var server;



const app = express();


app.use(bodyParser.json());

app.use(db,()=>{})

app.use(cors());

app.use('/api',api);
app.use('/api',student_api);




// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
//  })
 
//  app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message:error.message
//         }
//     });
//  });


app.listen(port,()=>{

    console.log("your port is working on ",port);
})