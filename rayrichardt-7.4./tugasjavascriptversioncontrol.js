const readline = require('readline-sync');

const userInput = readline.question("Please enter something: ");
console.log("You entered: " + userInput);


// Function to generate an array with 100 random values between 1 and 50
function generateRandomArray(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// Function to split the array into even and odd index arrays
function splitArrayByIndex(arr) {
    const evenIndexArray = [];
    const oddIndexArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenIndexArray.push(arr[i]);
        } else {
            oddIndexArray.push(arr[i]);
        }
    }
    return { evenIndexArray, oddIndexArray };
}

// Function to calculate min, max, total and average values of an array
function calculateArrayStats(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const total = arr.reduce((acc, val) => acc + val, 0);
    const average = total / arr.length;
    return { min, max, total, average };
}

// Generate random array
const randomArray = generateRandomArray(100, 1, 50);

// Split the array into even and odd index arrays
const { evenIndexArray, oddIndexArray } = splitArrayByIndex(randomArray);

// Calculate stats for even index array
const evenStats = calculateArrayStats(evenIndexArray);

// Calculate stats for odd index array
const oddStats = calculateArrayStats(oddIndexArray);

// Print the stats for both arrays
console.log("Even Index Array Stats:", evenStats);
console.log("Odd Index Array Stats:", oddStats);

// Compare the stats
if (evenStats.min > oddStats.min) {
    console.log("Minimum value is greater in Even Index Array");
} else {
    console.log("Minimum value is greater in Odd Index Array");
}

if (evenStats.max > oddStats.max) {
    console.log("Maximum value is greater in Even Index Array");
} else {
    console.log("Maximum value is greater in Odd Index Array");
}

if (evenStats.total === oddStats.total) {
    console.log("Total value is the same between Even and Odd Index Arrays");
} else if (evenStats.total > oddStats.total) {
    console.log("Total value is greater in Even Index Array");
} else {
    console.log("Total value is greater in Odd Index Array");
}

if (evenStats.average > oddStats.average) {
    console.log("Average value is greater in Even Index Array");
} else {
    console.log("Average value is greater in Odd Index Array");
}

