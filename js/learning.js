// Initialize elements and variables
const currentDateAndTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const thedate = document.querySelector('p');
const total = document.querySelector('#total');

copyrightyear.textContent = currentDateAndTime.getFullYear();
//console.log("It is now "+currentDateAndTime);
thedate.textContent = `⏲️ It is now ${currentDateAndTime}!`;

let theTotal = getSum(1,2,3,4,5,6,7,8,9,10);
//console.log(`The total is ${theTotal}.`);
total.textContent = theTotal;


function getSum(...theNumbers) {
	let sum = 0;
	 for (let aNumber of theNumbers) {
	 	sum += aNumber;
	 }
	 return sum;
}
