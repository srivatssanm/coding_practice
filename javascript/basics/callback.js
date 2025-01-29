
/*
A callback is a function passed as an argument to another function, which is then executed after the completion of that function's operation
  Super powerful way of handling async operations in JavaScript

  Issues with callbacks:
  a --> Callback Hell (Unmaintainable & callback inside callback)
  b --> Inversion of Control
*/


// setTimeout(function (){
//     console.log("hello , welcome");
// }, 3000);

var cart =["shoes", "dress", "belt"]

// api.createOrder(cart, function (){
//     api.proceedPayment(function (){
//         api.showOrderSummary(function (){
//             api.updateWallet()
//         })
//     })
// })

// Simulated API object
const api = {
    // Create order function
    createOrder: function(cart, callback) {
        console.log("Creating order with items:", cart);
        setTimeout(function() {
            console.log("Order created successfully.");
            callback();  // Once the order is created, proceed to the next step
        }, 1000);  // Simulating a 1-second delay for creating an order
    },

    // Proceed with payment function
    proceedPayment: function(callback) {
        console.log("Processing payment...");
        setTimeout(function() {
            console.log("Payment processed successfully.");
            callback();  // Once payment is complete, proceed to the next step
        }, 2000);  // Simulating a 2-second delay for payment
    },

    // Show order summary function
    showOrderSummary: function(callback) {
        console.log("Generating order summary...");
        setTimeout(function() {
            console.log("Order summary displayed.");
            callback();  // Once the order summary is shown, update wallet
        }, 1500);  // Simulating a 1.5-second delay for generating summary
    },

    // Update wallet balance function
    updateWallet: function() {
        console.log("Updating wallet balance...");
        setTimeout(function() {
            console.log("Wallet updated successfully.");
        }, 1000);  // Simulating a 1-second delay for wallet update
    }
};

// Cart array
var cart = ["shoes", "dress", "belt"];

// Simulating the entire order flow using nested callbacks --> PRISM OF DOOM
api.createOrder(cart, function() {
    api.proceedPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet();
        });
    });
});
