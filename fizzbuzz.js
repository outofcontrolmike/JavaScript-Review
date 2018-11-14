
// Creating varibles with number values that 100 will be divisible by
var A = 3;
var B = 5;

// for i begins at 0 and runs through 100, itterates to 100 by ++
for(i = 0; i <=100; i++)
{
// If any value of I is divisible by 3 and 5, console writes "FizzBuzz"
    if(i % 3 === 0 && i % 5 === 0)
    console.log("FizzBuzz");
    
// If any value of i is divisible by 3, Fizz
    else if( i % 3 === 0)
    {
        console.log("fizz");
    }

// if any value of I is divisible by 5, Buzz
    else if( i % 5 === 0)
    {
        console.log("Buzz");
    }
// other than the statments above, print any value of I normally that isn't divisible by 3 or 5
    else
    {
        console.log(i);
    }
}

let Z = 20
let Y = 10

for(m = 0; m <= 100; m++)
{
    if(m % Z === 0 && m % Y === 0)
    {
        console.log("ButtFuzz");
    }
    else if (m % Z === 0)
    {
        console.log("Butt");
    }
    else if (m % Y === 0)
    {
        console.log("Fuzz");
    }
    else
    {
        console.log(m);
    }
}