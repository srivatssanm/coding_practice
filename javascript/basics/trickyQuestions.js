
// const len =6;
// const val=[];
// for(i=0;i<len;i++);{ 
//     val.push(i+1);
// }
// console.log(val); 

//normal forloop
// const arr=[1,9,5,1,1,2,1,1,1,1]
// let hasEven = false;
// for(i=0;i<arr.length;i++){
//     console.log(`For loop run ${i+1} times`)
//     if(arr[i] %2 === 0){
//         hasEven = true;
//         break;
//     }
// }
// console.log(hasEven);

//forEach loop
// const arr=[1,9,5,1,1,2,1,1,1,1]
// let hasEven = false;
// arr.forEach((num,i) => {
//     console.log(`forEach loop runs ${i+1} times`);
//     if(num%2 === 0){
//         hasEven= true;
//     }
// })
// console.log(hasEven);

// let a=2;
// function outer(){
//     let b=3;
//     function inner(){
//         let c=4;
//         // console.log(a,b,c);
//     }
//     inner()
//     // console.log(a,b);
// }
// outer();
// console.log(a);

function outer(){
    
}

//currying with arrow fn
// const curry = x=>y=>z=>x+y+z;
// console.log(curry(2)(3)(4));

function sum(){
    let name1 ="sri" 
}
// sum()
// console.log(name1);

// var arr=[12,"sri","asswin","deva","bala",12,"loki"];
// for(i=0;i< arr.length;i++){
//     if(typeof arr[i] === "string") 
//     { 
//         // continue; //when if condition satisfied then it checks for another(then also for loop runs)
//         break; // when if satisfied it come out from for loop
//     }
//     console.log(arr[i]);
// }
// let i=0
// for(;;){
//     if(i<3) {
//         break;
//     }
//     console.log(i);
//     i++
// }

// call apply bind
var user ={
    fname : "LOGESH",
    lname: "KUMAR",
    state:"Tamil Nadu",
    country:"India",
    getFullName : function (){
        console.log(`My Full name is ${this.fname} ${this.lname}` );
    }
};
var dummy = {
    fname:"Srivatssan",
    lname:"Muralidharan"
};
// user.getFullName();
// user.getFullName.call(dummy);
// user.getFullName.apply(dummy);
// user.getFullName.bind(dummy)();
// var result = user.getFullName.bind(dummy);
// result();

