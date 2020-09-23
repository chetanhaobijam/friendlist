const express 		= require("express"),
			app 				= express(),
			bodyParser 	= require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


const friends = ["Jess", "Ronny", "Nick"];

app.get("/", function(req, res) {
	res.render("home", {friends: friends});
})

app.post("/", function(req, res) {
	var friend = req.body.friend;
	friends.push(friend);
	res.redirect("/");
})

app.listen(3000, function() {
	console.log("The server has started");
})