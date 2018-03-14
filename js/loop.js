// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

//1 

for(let i = 0; i <=20; i++) {
	


if(i % 2 === 0) {
	console.log(i + " is even");
} else {
	console.log(i + " is odd");
}

}

//2

// mulitples of 3 = fizz multiples of 5 = buzz multiples of 3 && 5 = fizzbuss 

for(let i = 1; i <=100; i++) {


	if(i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}


// Write a JavaScript program to construct the following pattern. 
// x
// xx
// xxx
// xxxx
// xxxxx


// Confused on how to do this 
// know it has to be a for loop.
 
for (i= 1; i <=5; i++) {


}


//need help here 


// 99 bottles loops 


// not sure if this is the correct way.
// but this works 

let beer = 99;
while (beer > 0) {
  let verse = [ // made an array 
    beer + " bottles of beer on the wall,",
    beer + " bottles of beer",
    "Take one down, pass it around",  
    (beer - 1) + " bottles of beer on the wall"
  ].join("\n"); // join displays elements in a array as a string // /n new line inserted between in "" to make it go down a line
 
  console.log(verse);
 
  beer--;
}
 

//


