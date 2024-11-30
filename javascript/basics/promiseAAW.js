const one = ()=>{
    return "I'm first";
}
const two = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I'm second");
        },3000);
    })
}
const three = ()=>{
    return "I'm third";
}

const all = async ()=>{
    var onnu = one();
    console.log(onnu);
    var rendu = await two();
    console.log(rendu);
    var moonu = three();
    console.log(moonu);

}
all();