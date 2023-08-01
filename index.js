// Task 1: Basic Node.js Server with Express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Task 2: Data Manipulation
function sumOfIntegers(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage of Task 2 function
const numbersArray = [1, 2, 3, 4, 5];
console.log('Sum of integers:', sumOfIntegers(numbersArray));

// Task 3: Asynchronous File Handling
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = data.trim().split(/\s+/).length;
    console.log(`Message :`,data)
    console.log('Total word count in data.txt:', wordCount);
  }
});
