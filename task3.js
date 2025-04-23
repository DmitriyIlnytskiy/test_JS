"use strict"

console.log("//// task3 ////");
let myHobby = {
    name: "coding",
    isIndoor: true,
    weeklyHours: 15,
    tools: ["laptop", "mause", "IDE", "internet"],
    getHobbySummary: function() {
        return "I enjoy " + this.name + ". It's an " + (this.isIndoor ? "indoor" : "outdoor") + " hobby. I spend about " + this.weeklyHours + " hours per week using tools like: " + this.tools.join(", ");
    }
};
console.log(myHobby.getHobbySummary());
