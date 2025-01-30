// import User from "./domManipulation"
const Course = require("./classjs")

var user  = new Course("example","example@gmail.com");

console.log(user.getinfo()); 
user.addcourse("js");
user.addcourse("Angular");
console.log(user.getCourseList());
console.log(user.getinfo().email);
