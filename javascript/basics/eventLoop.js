const one = ()=>{
    console.log("I'm first");
}
const two = ()=>{
    setTimeout(() => {
        console.log("I'm second log");
    }, 3000);
    console.log("hiiiiiiiiiiiiiiiiii");
}
const three = ()=>{
    console.log("I'm third");
}

one();
two();
three();