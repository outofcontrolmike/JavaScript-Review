// Michael Wilson
// 09/18/18

// Creating a shopping cart object

        // object named Shop with two properties
        const Shop = 
        {                   
            name: "Mike ",  // key value - name is Mike
            lname: "Wilson" // key value - lname is Wilson
        }

        // Array of valuables with string items and number values that can be added
        const valuables = ["cologne",10, "toothpaste",200, "Obsidian Stout 6pk",20, "Pepperoni Stick", 3];

        // a variable named D set to 0
        var d = 0;

        // function that prints details of the shopping cart
        function myDetails()
        {
            // this concatinates two values form the object.
            console.log("Name: " + Shop.name + Shop.lname); 
            
            // this will loop through the array starting at first value and ending at last
            console.log("Items Purchased:")
            for(a = 0; a <valuables.length; a++)
            {
                // Variable B jumps to the 2nd value in array, the price
                let b = a+1;
                console.log(valuables[a]);  // this logs the item names
                d += valuables[b];      // This adds the values of the numbers in the array - price
                a++;        // This disiplays the cart correctly - otherwise it lists both values 
            }
            console.log("Total Purchase: $" + d);  // Joins a string and the d variable!   



        }
        myDetails();


    




