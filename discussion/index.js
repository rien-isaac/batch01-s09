/*

    Data Structures
        -used to organized and manage the data effectively

    -Arrays
        -arrays are ordered collection of elements or items that can hold multiple values
        -[] array literals
        -index/subscript
            -refers to the position of an elements in the data structure
            -in JS, the array indexes are zero-based (meaning the first element starts at 0)
            
    Mutator methods
        -this are the functions that 'mutate' or change an array after they are created
        -this methods manipulate the original array performing varous tasks such as adding and removing elements
            -push()
                -adds an element in the end of an array and returns the array's length
                -stacks
                    -Last In First Out data structure (LIFO)
                    -pile of plates
                -syntax: arrayName.push('element');

            -pop()
                -remove the last element in an array and returns the removed element
                -syntax: arrayName.pop();

            -shift()
                -removes an element at the beginning of array and returns the removed element
                -queue - First In First Out (FIFO)
                -syntax: arrayName.shift();
                

*/

let person = {
  name: "Happy",
  age: 36,
  isSingle: true,
  isGrade: 90,
};
console.log(person);

let myBasket = ["Happy", 36, true, -90];
console.log(myBasket);

let beatles = ["John", "Paul", "Gringo", "George"];
// console.log(beatles);

console.log("Current array");
console.log(beatles);

let beatlesLength = beatles.push("Rob");
console.log(beatlesLength);
console.log("Mutated array from push method: ");
console.log(beatles);

// Adding multiple elements to an array
beatles.push("Ken", "Jedd");
console.log("Mutated array from push method");
console.log(beatles);

//pop
let removedMember = beatles.pop();
console.log(removedMember);
console.log("Mutated array from pop method");
console.log(beatles);

//shift
let anotherMember = beatles.shift();
console.log(anotherMember);
console.log("Mutated array from shift method");
console.log(beatles);

//splice
/*

    -simultaneoushly removes elements from a specified index number and add elements
    -syntax: arrayName.splice(startingIndex, deleteCount, elementsToBbeAdded);

 */

//splice
beatles.splice(1, 2, "Jun", "Mark");
console.log("Mutated array from splice method");
console.log(beatles);

/*

    sort()
        -rearranges the elements in alphanumeric order
        -syntax: arrayName.sort();

 */

//sort
beatles.sort();
console.log("Mutated array from sort method");
console.log(beatles);

/*
    reverse()
        -reverses the order of the element
        -syntax: arrayName.reverse();

*/

//reverse
beatles.reverse();
console.log("Mutated array from reverse method");
console.log(beatles);

/*
    Non-mutators Method
        -these are the functions that do not modify or change an array after they are created
        -these methods do not manipulate the original array performing various task such as returning elements from an arrray and combining arrays and printing the output
*/

let countries = ["US", "PH", "CAN", "SG", "JP", "TH", "FR", "DE"];

/*
    indexOf();
        -it returns the index number of the first matching element found in an array
        -ifi no match was found the result will be -1
        -the search process will be done from the first element proceeding to the last element
        -syntax: arrayName.indexOf(searchValue); arrayName.indexOf(searchValue, fromIndex);
*/

//indexOf
console.log(countries);
let firstIndex = countries.indexOf("TH");
console.log("Result of indexOf Method: " + firstIndex);

let invalidCountry = countries.indexOf("BR");
console.log("Result of indexOf Method: " + invalidCountry);

/*
    lastIndexOf
        -return the index number of the last matching element found in an array
        -the search process will be done from last element proceeding to the first element
        -syntax: arrayName.lastIndexOf(searchValue); arrayName.lastIndexOf(searchValue, fromIndex);
*/

//lastIndexOf
console.log(countries);
let lastIndex = countries.lastIndexOf("PH");
console.log("Result of lastIndexOF Method: " + lastIndex);

//getting the index number starting from a specified index
let lastIndexStart = countries.lastIndexOf("PH", 0);
console.log("Result of lastIndexOF Method: " + lastIndexStart);

/**
 * Slice
 *  -proportions/slices elements from an array and return a new array
 *  -syntax: arrayName.slice(startingIndex); arrayName.slice(startingIndex, endingIndex);
 */

//slicing off element from a specified index to the last
console.log("test here");
let slicedArrayA = countries.slice(1);
console.log(`Result from slice method: ${slicedArrayA}`);

//slicing off elements from a specified index to another index
let slicedArrayB = countries.slice(1, 4);
console.log(`Result from slice method: ${slicedArrayB}`);

//slicing off element from the last element of an array
let slicedArrayC = countries.slice(5);
console.log(`Result from slice method: ${slicedArrayC}`);

let slicedArrayC1 = countries.slice(-4);
console.log(`Result from slice method: ${slicedArrayC1}`);

/**
 * toString()
 *  -returns an array as a string seperated by comas
 * -syntax: arrayName.toString();
 */

let stringArray = countries.toString();
console.log(`Result from toString method: ${stringArray}`);

let numstring = [1, 2, 3, 4];
console.log(numstring);
console.log(`Result from toString method: ${numstring}`);

//concat()
/**
 * -combines two arrays and returns the combined result
 * syntax: arrayA.concat(arrayB); arrayA.concat(elementB);
 */

let taskArrayA = ["drink java", "eat javascript"];
let taskArrayB = ["Inhale css", "breathe sass", "be node"];
let taskArrayC = ["get git", "be node"];

let tasks = taskArrayA.concat(taskArrayB);
console.log(`Result from concat method: ${tasks}`);

let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log(`Result from concat method: ${allTasks}`);

//combining arrays with elements
let combinedTask = taskArrayA.concat("small express", "throw react");
console.log(`Result from combined task concat method ${combinedTask}`);

//join
/**
 * -returns an array as a string sperated by specified seperator
 * -syntax: arrayName.join('seperator string')
 */

let users = ["nicole", "mark", "carl", "cedric"];
console.log(users);
console.log(users.join());
console.log(users.join(" "));
console.log(users.join(" - "));

//Iteration Methods
/*

    -iteration methods are loop designed to perform repetitive tasks on arrays
    -iteration method loops the overall items in an array
    -useful for manipulating array data resulting in complex task
    -array iteration methods normally work with a function supplied as an argument

    forEach()
        -similar to a for loop that iterates on each array element
        -for each item in the array, the anonymous function passed in the forEach() will be run
            -the anonymous function is able to receive the current item being iterated or loop over by assigning a parameter
            -variable names for arrawys are normally written in the plural form of the data strored in an array
            forEach() does not return anything
            -syntax:
                arrayName.forEach(function(individualElement) {
                    code block
                })

 */
// console.log("items displayed using for each: ");
// allTasks.forEach(function (tasks) {
//   console.log(tasks);
// });

//using forEach with conditional statements
let filtersTask = [];

/*
    -it's a good practice to print the current element in the console when working with array iterations method to have an idea of what information is beiing worked for each iteration of the loop
    -creating a separate variable to store results of array iteration methods are also good practice to avoid confusion by modifying the original array
*/

allTasks.forEach(function (tasks) {
  console.log(tasks);

  //if the element/string's lenght is > 10 character
  //Add the element to the filteredTasks array
  //   console.log(tasks.length);
  if (tasks.length > 10) {
    filtersTask.push(tasks);
  }
});

console.log(`Result of filtered tasks: ${filtersTask}`);

/*
    map
    -iterates on each element and return new array with different values depending on the result of the function's operation
    -this is useful for performing where mutating/changing the elements are required
    -unlike the foreach method, the map method requires the use of a 'return' statement in order to create aother array with the perform operation
    -syntax:
        let/const resultArray = arrayName.map(function(individualElement){
            codeblock
        })
 */

let numbers = [1, 2, 3, 4, 5];
// let numbers = [];
let numberMap = numbers.map(function (number) {
  return number * number;
});

console.log(`original array: ${numbers}`);
console.log(`result of the map method: ${numberMap}`);

//map() vs forEach()
let numberForEach = numbers.forEach(function (number) {
  return number * number;
});

console.log(`result of foreach method: ${numberForEach}`);

//forEach(), loops overall items in the array as does map(), but forEach() does not return a new array

//every()
/*

    -checks if all elements in an array meet the given condition
    -this is useful for validating data stored in arrays specially when dealing with large amounts of data
    -return a true value if all elements meet the condtion and false if otherwise
    -syntaz: 
        let/const resultArray = arrayName.every(funciont(indivElement){
            return expression/condition;
        })

 */

let allValid = numbers.every(function (number) {
  return number < 3;
});

console.log(`result of every method: ${allValid}`);

//some
/*
    -check if at elast one element in the array meets the given condition
    -returns a true value if at least one element meets the condition and false if otherwise
    -syntax:
        let/const resultArray = arrayName.some(function(element){
            return expression/condition;
        })
*/

//some
let someValid = numbers.some(function (number) {
  return number < 3;
});
console.log(`result of every method: ${someValid}`);

//combining the returned result from the every/some method may be used in other statements to perform consecutive results

if (someValid) {
  console.log(`Some numbers in the array are greater then 2`);
}

/*
    filter()
    -returns new array that contains elements which meeets the given condiition
    -return an empty array if no elements were found
    -useful for filtering array elements with a given condiiton and shortens the syntax compared to using other array iteration methods
    syntax:
        let/const resultArray = arrayName.filter(fucntion(element){
            return expression/condition;
        })
*/

//filter()
let filterValid = numbers.filter(function (number) {
  return number < 3;
});
console.log(`result of filter method: ${filterValid}`);

//no elements found
let nothingFound = numbers.filter(function (number) {
  return (number = 0);
});
console.log(`return of filter method: ${nothingFound}`);

//filtering using forEach
let filteredNumbers = [];
numbers.forEach(function (number) {
  console.log(number);
  if (number < 3) {
    filteredNumbers.push(number);
  }
});
console.log(`result of filter method: ${filteredNumbers}`);

let products = ["Mouse", "Keyboard", "Monitor", "AVR"];

/*
    includes()
        -includes() checks if the argument passed can be found in the array
            -it returns boolean which can be saved in a variable
            -it returns true if the argument is found in the array
            -returns false if the argument is not found
            syntax: 
                arrayName.includes(<argumentToFind>);
*/

//include()
let productFound1 = products.includes("Mouse");
console.log(productFound1);

let productFound2 = products.includes("Headset");
console.log(productFound2);

/*
    -methods can be 'chained' using them one after another
    -the result of the first method is used on the second method untill all 'chained' methods have been resolve
    --how chaining resolvess in our example:
        1. the 'product' element will be converted into all lowercase
        2. the resulting lowercase is used 'includes' method
*/

// let filterProducts = products.filter((product) =>
//   product.toLowerCase().includes("a")
// );

let filterProducts = products.filter(function (product) {
  return product.toLowerCase().includes("a");
});
console.log(filterProducts.map((product) => product.toLowerCase()));

/*

    REDUCE()
    -evaluates the element from left to right and returns/reduces the array into a single value
    syntax:
        let/const resultArray = arrayName.resuce(function(accumulator, currentValue){
            return expression/operation
        });

        - 'accumulator' parameter in the function stores the result to every iteration of the loop
        - the 'currentValue' is the current/next element in the array that is evaluated in each iteration of the loop

        -how the reduce method works
            1. the first/result element in the array is stored in the 'accumulator' parameter
            2. the second/next eleemnt in the array is stored in the 'currentValue' parameter
            3. an operation is performed on the two elements
            4. the loop repeats step 1-3 until all elements have been worked on
 */

let iteration = 0;

let reducedArray = numbers.reduce(function (x, y) {
  //used to track the current iteration count and accumulator and the current value data
  console.warn("current iteration: " + ++iteration);
  console.log("accumulator: " + x);
  console.log("current value: " + y);

  //the operation to reduce the array into a single value
  return x + y;
});
console.log(`Result of reduce metohd: ${reducedArray}`);

//reducing string arrays
let list = ["hello", "again", "love"];
let reducedJoin = list.reduce(function (x, y) {
  return x + " " + y;
});
console.log(`result of reduced method: ${reducedJoin}`);
