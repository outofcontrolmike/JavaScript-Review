// Musketeers

//created an array of characters
const capCom = ["ryu", "Rand", "Katt"];

// shows number of values in an array
console.log(capCom.length);

// Need to print values of the array
for (i = 0; i < capCom.length; i++)
{
    // this will print the value of i through the array of capCom 3 times, grabes each value
    console.log(capCom[i]);
}

// Adding another value to the party
capCom.unshift("Bow");

// this will grab the value I just added
console.log(capCom[0]);


// forEach Method
capCom.forEach(myElement =>
    {
        //logs the for each loop '
        console.log(myElement);
        });

// removing last element from array
capCom.pop()
console.log(capCom.length);

//This prints the value of the array length - 1.  Array lenght still is 4
console.log(capCom[capCom.length-1]);

// for of loop
for (myElement of capCom) {
    console.log(capCom);
}


 // Sum of values
const values = [3, 11, 7, 2, 9, 10];
console.log(values);
console.log(
    [3, 11, 7, 2, 9, 10].reduce((a, b) => a + b, 0));


// Maximum Value in array

const nums = [10, 12, 100, 2];
console.log(nums)
console.log(Math.max(...nums));

