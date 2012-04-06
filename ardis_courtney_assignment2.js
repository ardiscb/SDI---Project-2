/*
Author: Courtney Ardis
Date: April 5, 2012
SDI 1204
Project 2
*/

/*
Note: 
I apologize for my code in advance. I didn't manage time at all 
this week as I thought I could and wish I was able to. I am definitely 
going to use the extra week we have to work on Project 3 as well 
as Project 4.
*/

var shipNeeds = ["weapons", "structure", "fuel"];
var ready = true;


var checkShip = function (itemName) {

	var isReady = function () 
	{
		isReady = ready;
		if (isReady === true) 
		{
			message = (" is ready");
		}
		else 
		{
			message = (" is not ready");
		};

		return message;
	}	
	console.log("Check " + itemName + 
		" to see if it" + isReady());
};

var checkAllShip = function () {
	for (var itemNumber = 0; itemNumber < shipNeeds.length; itemNumber++) {
		var itemName = shipNeeds[itemNumber]
		checkShip(itemName);
	}
};

checkAllShip();

/*	
*************************************************
* More code I am confused on how to get to work *
*************************************************

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