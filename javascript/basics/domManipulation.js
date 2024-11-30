// const element = document.querySelector("h2");
// const button = document.querySelector("button");
// button.addEventListener("click", function(){
//     element.innerText = `Hey these are the random number ${Math.floor(Math.random() * 99)} `;
// });

function Time(elementId) {
    this.element = document.getElementById(elementId);
}
Time.prototype.updateTime = function (){
    var now = new Date();
    var hour = now.getHours();
    if(hour>12){
        hour -= 12
    }
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var timeString = hour + ":" + min + ":" +sec;
    this.element.textContent = timeString
}
// var clock = new Time("clock");
// setInterval(() => {
//     clock.updateTime();
// }, 1000);


