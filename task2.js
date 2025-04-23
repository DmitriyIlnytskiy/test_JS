"use strict"

console.log("//// task2 ////");
let studentNames = ["Alice", "Bob", "Alex", "David", "Emily"];
studentNames.forEach(display);
studentNames.push("Frank");
console.log("///////");

studentNames.forEach(display);

function display(element){
    console.log(element.toUpperCase());
}