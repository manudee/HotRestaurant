var express = require("express");
var path = require('path');
var bodyParser = require ("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;




app.listen(PORT,function(){
	console.log("App listening on port "+ PORT);
})

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var input = [{
	
	Name:"Guest1",
	Number : "123456788",
	email_ID : "abc@abc.com",
	unique_ID : "Unique1"
},
{

	Name:"Guest2",
	Number : "123456788",
	email_ID : "abc2@abc2.com",
	unique_ID : "Unique2"
},
{

	Name:"Guest3",
	Number : "123456788",
	email_ID : "abc3@abc3.com",
	unique_ID : "Unique3"
},
{

	Name:"Guest4",
	Number : "123456788",
	email_ID : "abc4@abc4.com",
	unique_ID : "Unique4"
},
{

	Name:"Guest5",
	Number : "123456788",
	email_ID : "abc5@abc5.com",
	unique_ID : "Unique5"
},
{

	Name:"Guest6",
	Number : "123456788",
	email_ID : "abc6@abc6.com",
	unique_ID : "Unique6"
},
{

	Name:"Guest7",
	Number : "123456788",
	email_ID : "abc7@abc7.com",
	unique_ID : "Unique7"

}];

var reservations = [];
var waitList = []
check();
function check(){
	reservations = [];
	waitList =[];
for(var i = 0;i<input.length;i++){

	if (reservations.length >= 5){
		waitList.push(input[i])
		//reservations.pop();
		//console.log(waitList);
	}

	else{
		//this needs data when submit button is clicked.
		reservations.push(input[i]);
	}

}
}


console.log(reservations.length);

// if (reservations.length >= 5){
// 	waitList.push(reservations[5])
// 	//reservations.pop();
// 	//console.log(waitList);
// }

// else{
// 	//this needs data when submit button is clicked.
// 	reservations.push();
// }

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});


app.get("/book", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});



app.get("/api/reservations",function(req,res){
	//console.log(reservations.length);
	// for (var i = 0; i < 5; i++) {
        return res.json(reservations);
        //console.log(reservations[i])
      // }
 })

app.get("/api/waitList",function(req,res){

	//for (var i = 0; i < waitList.length; i++) {
         return res.json(waitList);
      //}
 })


app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;
  //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  input.push(newcharacter);
  check();
  res.json(newcharacter);
});