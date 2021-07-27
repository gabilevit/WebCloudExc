const express = require("express");
const app = express();
var cors = require('cors');

app.use(cors()); // Use this after the variable declaration

app.listen(1902, () => {
    console.log("app is up..");
  });

app.get(`/getHelloFromServer`, (req, res) => {
    try{
      res.json("Hello world from server!");
    }catch(error){
      res.error();
    }
})