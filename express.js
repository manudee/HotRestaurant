var express = require("express");

var app = express();
var PORT = 3000;

app.listen(PORT,function(){
	console.log("App listening on port "+ PORT);
})


var reservations = [{
	routename:"guest1",
	Name:"Guest1",
	Number : "123456788",
	email_ID : "abc@abc.com",
	unique_ID : "Unique1"
},
{
routename:"guest2",
	Name:"Guest2",
	Number : "123456788",
	email_ID : "abc2@abc2.com",
	unique_ID : "Unique2"
},
{
routename:"guest3",
	Name:"Guest3",
	Number : "123456788",
	email_ID : "abc3@abc3.com",
	unique_ID : "Unique3"
},
{

},
{
routename:"guest4",
	Name:"Guest4",
	Number : "123456788",
	email_ID : "abc4@abc4.com",
	unique_ID : "Unique4"
},
{
routename:"guest5",
	Name:"Guest5",
	Number : "123456788",
	email_ID : "abc5@abc5.com",
	unique_ID : "Unique5"
},
{
routename:"guest6",
	Name:"Guest6",
	Number : "123456788",
	email_ID : "abc6@abc6.com",
	unique_ID : "Unique6"
}]


app.get("/", function(req, res) {
  res.send("Welcome to the restaurant Page!");
});

// app.get("/api/:reservations?",function(req,res){

// 	var chosen = req.params.reservations;
// 		console.log(chosen);
// })