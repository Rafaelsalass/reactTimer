var express = require("express");

// Create our app
var app = express();

//app.use() is kinda of and include for the expresso library
app.use(express.static('public'));

//app.liste() is for starting the server.
app.listen(3000,function(){
  console.log('Express server is up on port 3000, from wheater');
});
