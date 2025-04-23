"use strict"

console.log("//// task5 ////");
class Hobby{
    constructor(name,isIndoor, weeklyHours)
    {
        this.name = name;
        this.isIndoor = isIndoor
        this.weeklyHours = weeklyHours;
    }
    describe(){
        console.log("My hobby is " + this.name + ". It's an " + (this.isIndoor ? "indoor" : "outdoor") + " hobby. I spend about " + this.weeklyHours + " a week on it");
    }

}
let hobby1 = new Hobby("chess",true,8);
let hobby2 = new Hobby("painting",false,17);
hobby2.describe();
hobby1.describe();