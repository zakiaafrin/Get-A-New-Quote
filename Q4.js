// Off the coast of Miami Beach, a group of oceanologists have
// begun a project that will grow the population of goldfish. By the end of each
// month, the population will be 4 times larger! To stay on top of this
// explosive growth, the scientists would like a printout of how many
// goldfish will make a new home in Miami Beach water.
//
// Copy the variables below and use them to build a while loop that prints
// a message for one year’s worth of time.

var numGoldfish = 4;
var monthNumber = 1;
var monthsToPrint = 12;

// Here’s what the first two lines of output should look like:
//
//    There will be 16 goldfish after 1 month(s)!
//    There will be 64 goldfish after 2 month(s)!
//
// Note: you must the the above 3 variables in your solution.
while(monthNumber <= monthsToPrint){
    numGoldfish *= 4;
    console.log("There will be "  + numGoldfish + " goldfish after " + monthNumber + " month(s)! ")
    monthNumber = monthNumber + 1;
}
