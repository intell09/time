const perf = require('execution-time')();

let lineIterations = 0;
let quadIterations = 0;

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

function largeArray (size){
    let array = []
    for(let i = 0; i < size; i++){
        array.push(i)
    }
    
}

function tinyArray (size){
    let array = []
    for(let i = 0; i < size; i++){
        array.push(i)
    }
    
}


function smallArray (size){
    let array = []
    for(let i = 0; i < size; i++){
        array.push(i)
    }
    
}

function mediumArray (size){
    let array = []
    for(let i = 0; i < size; i++){
        array.push(i)
    }
    
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);





// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();        // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log([1, 2, 3, -2]);
function addToZero (num){
    if(num < 2){
        return true;
    } else {
        return false;
    }
}

function findUniqueChars() {
    if(hasUniqueChars == moonday){
        return true;
    } else if (hasUniqueChars == moonday){
        return false;
    }
}



console.log([hi, hell0])
function PangramSen() {
    if(isPangram == "The quick brown fox jumped over the lazy dog"){
        return true;
    } else if (isPangram == "I like cats, but not mice"){
        return false;
    }
}

console.log([hi, hello]); 

function findlongWords(arr);{
  let longestWords = "";
  for(let i = 0; i < arr.length; i++) {
  if(longestWords.length > arr[i].length){
  longestWords = arr[i];
  }
}
return longestWords;
}

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
