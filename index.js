
// ----------------------Part 1: Fizz Buzz-----------------------------------------------

// Loop through all numbers from 1 to 100.
for(i = 1; i <= 100;i++){
    // If a number is divisible by 3, log “Fizz.”
    if(i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz.");
        // If a number is divisible by 5, log “Buzz.”
    } else if(i % 5 === 0){
        console.log("Buzz.");
        // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    }else if(i % 3 === 0){
        console.log("Fizz.");
        // If a number is not divisible by either 3 or 5, log the number.
    } else{
        console.log(i);
    }
}

// ----------------------Part 2: Prime Time-----------------------------------------------

// Declare an arbitrary number, n.

let n = 22

// Create a loop that searches for the next prime number, starting at n and incrementing from there.
while(true){
    if(n % 2 !== 0 && n % 3 !== 0){
        // As soon as you find the prime number, log that number and exit the loop.
        console.log(`${n} is Prime`);
        break;
    }
    n++;
}

// ----------------------Part 3: Feeling Loopy-----------------------------------------------

let str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// initialize currrentCell and cells Variables
let currentCell= 1;
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
// Loop through the characters of a given CSV string.

for(let i in str){
    switch (str[i]){
        // If a comma is encountered, move to the next cell
        case ",":
            if (currentCell === 1) currentCell = 2;
            else if (currentCell === 2) currentCell = 3;
            else if (currentCell === 3) currentCell = 4;
            else currentCell = 1;
            break;

        case "\n":
        // When a newline character is encountered, reset to the first cell and print the cell values
            currentCell = 1;
            console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);

        // Reset cell values
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            break;
            break;    

        default:
        // Concatenate the current character to the appropriate cell
            switch (currentCell) {
                case 1:
                    cell1 += str[i];
                    break;
                case 2:
                    cell2 += str[i];
                    break;
                case 3:
                    cell3 += str[i];
                    break;
                case 4:
                    cell4 += str[i];
                    break;
            }
            break;
    }

}