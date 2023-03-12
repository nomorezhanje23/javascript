/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
const addition = function (number1, number2){
// Step 2: In the function, return the sum of the parameters number1 and number2
return number1 + number2;}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
const addNumbers = function (){
    let addend1 = parseFloat(document.getElementById("addend1").value);
    let addend2 = parseFloat(document.getElementById("addend2").value);

// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector("#sum").value = addition(addend1, addend2);}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
    document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (number1, number2){
    return number1 - number2;
}
const subtractNumbers = function (){
    let minuend = parseFloat(document.getElementById("minuend").value);
    let subtrahend = parseFloat(document.getElementById("subtrahend").value);

    document.querySelector("#difference").value = subtract(minuend, subtrahend);
}
     document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply =  (number1, number2) =>{
    return number1 * number2;
}
const mulitplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2  = parseFloat(document.getElementById("factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}
    document.querySelector("#multiplyNumbers").addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = function (number1, number2){
    return number1/number2;
}
const divideNumbers = function (){
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor  = parseFloat(document.getElementById("divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}
    document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.
//**********ANSWER: I HAVE TESTED ALL METHODS.***********

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
const currentYear = "2023";

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let vals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = vals;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
function isOdd(num){
    return (num % 2 == 1)
}
vals = vals.filter(isOdd);
document.querySelector("#odds").textContent = vals;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

let order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
function isEven(num){
    return (num % 2 == 0)
}
order = order.filter(isEven);
document.querySelector("#evens").textContent = order;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// FOR NOTES
//**let zveses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
//let sum = 0;
//for (let zvese of zveses){
//    sum += zvese;
//}
//document.querySelector("#sumOfArray").textContent = sum;

let zveses = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let sum = zveses.reduce((acc,val) => acc + val);
document.querySelector("#sumOfArray").textContent = sum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
//FOR NOTES
//let items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
//function doubler(x) {
//    return x * 2;
//}
//items = items.map(doubler);
//document.querySelector("#multiplied").textContent = items;

let items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

items = items.map(x => x * 2);
document.querySelector("#multiplied").textContent = items;


// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let newList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

let SumAll = ( newList.map(x => x * 2)).reduce((acc, val) => acc + val);
document.querySelector("#sumOfMultiplied").textContent = SumAll;
