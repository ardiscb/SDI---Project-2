/*
Author: Courtney Ardis
Date: April 5, 2012
SDI 1204
Project 2
*/

/*
Note: 
This is not an excuse, merely a note as labeled. I apologize for this 
code in advance. I didn't manage time at all this week as I thought
I could and wish I was able to. I am definitely going to use the extra week 
we have to work on Project 3 as well as Project 4 in hopes to succeed and 
take knowledge from this course.
*/

var shipNeeds = ["Weapons", "Structure", "Supplies"];
var ready = true;


var checkShip = function(itemName) {

var isReady = function () {
	if (ready != false) {
		message = (" is ready");
		}
	else {
		message = (" is not ready");
		};
	return message;
}	
	console.log("Check " + itemName + 
		"to see if it" + isReady);
};

var checkAllShip = function () {
	for (var itemNumber = 0; itemNumber < shipNeeds.length; itemNumber++) {
		var itemName = shipNeeds[itemNumber]
		checkShip(itemName);
	}
};


/*		
//attempt at a for loop
	for (var itemName = 0;  itemName < thisItemName; itemName--) {
		console.log(itemName + ready + "to attack Earth!");
	};
	return
};
checkShip(itemName, soldierNumber);


//attempt at a while loop within a function
var it = function () {
	while () {
		var variable = Math.floor();
	};
};
*/