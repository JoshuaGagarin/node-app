const express = require('express');
const { dirname } = require('path');
const app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res) {
    res.sendFile(__dirname + "/views/index.html");
  });

  app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 3000");
})