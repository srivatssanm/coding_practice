// import User from "./domManipulation"
const Course = require("./classjs")

var user  = new Course("loki","loki@gmail.com");

console.log(user.getinfo()); 
user.addcourse("js");
user.addcourse("Angular");
console.log(user.getCourseList());
console.log(user.getinfo().email);
