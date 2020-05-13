var rp= require('request-promise');
const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
const app=express();
// const mongoose = require('./database/mongoose');

// const Auth = require('./database/auth/mail_psw');

// app.get('/',cors(),function(req,res){
//         console.log(req.query);
//          let Movie_id=req.query.i;
//          var options = {
//          uri:'http://www.omdbapi.com/?apikey=d883870d&i=' + Movie_id};
//          rp(options)
//          .then( (filmName)=>{
//                  res.send(filmName)        
//          })
//          .catch(function (err) {
 
//          });
//  });

app.get('/',cors(),function(req,res){
       console.log(req.query);
        let Movie_name=req.query.s;
        console.log(Movie_name);
        var options = {
        uri:'http://www.omdbapi.com/?apikey=d883870d&s=' + Movie_name};
        console.log(options);        

        rp(options)
        .then( (filmName)=>{
                // console.log(res);
                res.send(filmName)
                
        })
        .catch(function (err) {

        });
});

app.get('/',cors(),function(req,res){
        console.log(req.query);
         let Movie_id=req.query.i;
         var options = {
         uri:'http://www.omdbapi.com/?apikey=d883870d&i=' + Movie_id};
         rp(options)
         .then( (filmName)=>{
                 res.send(filmName)        
         })
         .catch(function (err) {
 
         });
 });

//...............insert data.............

// app.post('/insert',(req,res)=>{
//         var detaills = Auth({
//           email:req.body.email,
//           password:req.body.password
//       })  
//           detaills.save() 
//                   .then((auth) =>res.send(auth))
//                   .catch((error) => console.log(error));
//                   console.log(req.body.email);
//                   console.log(req.body.password); 
//   });
  
app.listen(2000,()=>console.log("Server opened on port 2000"));
app.use(cors());
app.use(bodyParser());