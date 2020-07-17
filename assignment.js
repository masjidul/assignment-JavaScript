//Problem1 feetToMile
function feetToMile(feet){
    if(feet >= 0) {
        var mile = feet / 5280;
    }
    if (feet < 0) {
       var mile = "Error!!! Distance can't be Negative!";
    }  
      return mile;
}
var result = "Mile: " + feetToMile(10);
console.log(result);


//problem 2 woodCalculator
function woodCalculator(chair, table, bed) {
    var countChairWood = chair * 1;
    var countTableWood = table * 3;
    var countBedWood  = bed * 5;

    var totalWoods = countChairWood + countTableWood + countBedWood;
    return totalWoods;
}
var woods = woodCalculator(10, 20, 50);
console.log(woods);


//Problem 3 brickCalculator
const bricks = 1000;

function brickCalculator(floor, height) {
    if (floor <= 10){
        height = 15 * floor *bricks;
        var needBricks = height;
    }
    else if (floor <= 20) {
        height = 12 * (floor-10) *bricks + 150000;
        var needBricks = height;
    }
    else if (floor > 20) {
        height = 10 * (floor-20)*bricks + 270000;
        var needBricks = height;
        }
    return needBricks;
}

var nthFloor = brickCalculator(15) + " Bricks Need!";
console.log(nthFloor);



//Problem 4 tinyFriend
function tinyFriend(testNames) {
    let smallName = testNames[0];
    for (let i = 1; i < testNames.length; ++i) {
    if (testNames[i].length < smallName.length) {
        smallName = testNames[i];
    }
    else if(testNames[i].length === ""){           	
        smallName = testNames[i] + "Empty String!"; 
     } 
 }
 return smallName;
}

var testNames = ["Volvo", "Aa", "Bmi", "Ratul","Abba", "Tusher","Zax","Banana","Abba", "Robin", "Orange","Apple","Mango"];
var result = tinyFriend(testNames);
console.log(result);

var total = tinyFriend([10, 20, 30, 40]);
console.log(total);