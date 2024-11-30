class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    getinfo(){
        return {name :this.name, email:this.email}
    }
    #courselist =[];
    addcourse(courseName){
        this.#courselist.push(courseName)
    }
    getCourseList(){
        return this.#courselist;
    }
    static login(){
        console.log("User is logged in !!!");
    }
}
module.exports = User;

//Inheritance - Child Class
class Subuser extends User{

    constructor(name,email){
        super(name,email);
    }
    getSubUserInfo(){
        console.log("Rishav is a subuser");
    }
    // login(){
    //     console.log("SubUser is Logged in successfully");
    // }
}

var sri = new User("sri","sri@gmail.com" ); //parent object
var loki = new Subuser("ragul","ragul@gmail.com"); // child object

console.log(sri.getinfo());
console.log(loki.getinfo());

loki.getSubUserInfo();
loki.login();

sri.addcourse("angular");
console.log(sri.getCourseList());
loki.addcourse("NodeJS")
console.log(loki.getCourseList());




