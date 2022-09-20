const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/
//console.log(fifaData.length);

const twoonefour = []
for(let i = 0; i < fifaData.length; i++) {
    if (fifaData[i].Year === 2014) {
        twoonefour.push(fifaData[i]);
    }
}
// function sort(keyword) {
//     ((keyword) => {
//         newArray.push()
//     });
//}

 let twofourfinal = twoonefour.filter(final => final.Stage === "Final" ); 

console.log(twofourfinal)

//(a) Home Team name for 2014 world cup final
//Germany
//(b) Away Team name for 2014 world cup final
//Argentina
//(c) Home Team goals for 2014 world cup final
// 1
//(d) Away Team goals for 2014 world cup final
//0
//(e) Winner of 2014 world cup final */
//Germany

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {
    let finalist = []
    for(let i = 0; i < array.length; i++) {
        if (array[i].Stage === "Final") {
            finalist.push(array[i]);
        }
    }
    return finalist
 }

console.log(getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
    let years = [];
    let finals = callback(array);
    for(let i = 0; i < finals.length; i++) {    
        years.push(finals[i]["Year"]);
    }
    return years;
}

console.log(getYears(fifaData, getFinals))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callback) {
    let winners = [];
    let finals = callback(array);
    for(let i = 0; i < finals.length; i++) {
        if (finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]) {
            winners.push(finals[i]["Home Team Name"]);
        }
        else if (finals[i]["Home Team Goals"] < finals[i]["Away Team Goals"]) {
            winners.push(finals[i]["Away Team Name"]);
        }
    }
    return winners;
}

console.log(getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callback1, callback2, callback3) {
    let strings = [];
    let finals = callback1(array);
    let years = callback2(array, callback1);
    let winners = callback3(array, callback1);
    for(let i = 0; i < finals.length; i++) {
        strings[i] = "In " + years[i] + ", " + winners[i] + " won the world cup!";
    }
    return strings;
}

console.log(getWinnersByYear(fifaData, getFinals, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(cb) {
    let totalAverage = 0;
    let homeScore = 0;
    let awayScore = 0;
    let finals = cb;//(fifaData);
    for(let i = 0; i < finals.length; i++) {
        homeScore = (homeScore + finals[i]["Home Team Goals"]);
        awayScore = (awayScore + finals[i]["Away Team Goals"]);
    }
    totalAverage = (homeScore + awayScore) / finals.length;
    totalAverage = totalAverage.toFixed(2)
    //totalAverage = Number(totalAverage);
    return totalAverage;
 }

console.log(getAverageGoals(getFinals(fifaData)));


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
