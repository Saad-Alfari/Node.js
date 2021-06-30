const express = require("express");
const app = express();
app.use(express.urlencoded());

app.use(express.static("public")); // استخدمها عشان الملفات اللي جايه من البوتستراب تكون ستاتيك ولازن احك ال ستاتيك داخل الاكسبريسس واسمي الملف الجديد "عام " عشان احط الملفات حقت السي اس اس والصور فيه 

app.get("/",function(req,res){ // ياخذ ملف الاتش تي ام ال ويرسلها للبراوزر 

 res.sendFile(__dirname+"/index.html");

});

app.post("/", function(req,res){ // يرسل للسيرفر من خلال المتصفح عن طريق البوست 

var fname = req.body.Fname;
var lname = req.body.Lname;
var em = req.body.Em;
console.log("First Name"+fname+"Last Name"+lname+"Email"+em);
});

app.listen(3000, function() { // يستمع للسيرفر ويشغله 

console.log("The server is running with 3000 port !");

});