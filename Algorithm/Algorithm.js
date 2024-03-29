// This is method 1: Create miniMaxSum function

// I will use big-integer to allow large integer result

const bigInteger = require('big-integer')

function miniMaxSum(arr) {
    arr.sort((a,b) => a - b);
    let sumArray = new bigInteger(0);
    for (let i = 0; i < arr.length; i++)
    {
        sumArray = sumArray.add(arr[i]);
    }
    let maxFourInteger = sumArray.subtract(arr[0]);
    let minFourInteger = sumArray.subtract(arr[arr.length - 1]);
    console.log(minFourInteger.toString(), maxFourInteger.toString())
}

//Test 

const arr = [10000000000000000000000000000000000000000, 2000000000000000000000000000000000, 30000000000000000000000, 4000000000000000000000000000, 5000000000000000000000000000000000];
miniMaxSum(arr);