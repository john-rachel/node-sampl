
const express = require('express');

const app = express();
const path = require("path");
const jsonvalue ="";


app.use(express.static("public"));


//Code to get data from DB

app.get("/data", (req, res) => {
 
  // json format output
  var jsonData = '[{"version":"1.0","service":"sales", "env":"uat","status":"pass"},{"version":"1.0","service":"inventory", "env":"uat","status":"pass"}]';
  
  res.send(jsonData);

 
});

  
app.listen(3000)
console.log ("Server Running 3000")