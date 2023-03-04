/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const fullname = 'Nomore Zhanje';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = fullname;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = '2023';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myImg = document.querySelector('img');

// Step 6: copy your image into the "images" folder
myImg.setAttribute("src", "images/nomore.jpg");

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
//** Since this is a hit, I have broken down the attribute statement to make life easy. **/
myImg.setAttribute("alt", "My Photo");



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFoods = ['burger', ' chicken', ' pasta' ,' braai'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFavoriteFood = ' pap';

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavoriteFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favoriteFoods;

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2

document.querySelector('#food').textContent = favoriteFoods;

