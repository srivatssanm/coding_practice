function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isWalkdog = true;
            if (isWalkdog) {

                resolve("you walk the dog");
            }
            else {
                reject("can't walk dog")
            }
        }, 1000);
    })
}
function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isCleanKitchen = false;
            if (isCleanKitchen) {
                resolve("you clean the kitchen");
            }
            else {
                reject("You can't clean the kitchen ")
            }
        }, 3000);

    })
}
function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTakeOutTrash = true;
            if (isTakeOutTrash) {
                resolve("you take out the trash");
            }
            else {
                reject("you can't take out the trash !!")
            }
        }, 1000);
    })
}

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("Finished all tasks!!!");
//         })
//     })
// })

walkDog().then((data) => {
    console.log(data);
    return cleanKitchen();
}).then((data) => {
    console.log(data);
    return takeOutTrash();
}).then((data) => {
    console.log(data);
    console.log("You finished all tasks !!!");
}).catch((error) => {
    console.log(error);
})