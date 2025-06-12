
function calculateChaiIngredients(numberOfCups) {
  const water = 200 * numberOfCups;
  const milk = 50 * numberOfCups;  
  const teaLeaves = 1 * numberOfCups; 
  const sugar = 2 * numberOfCups;    
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar : ${sugar} teaspoon${sugar > 1 ? 's' : ''}`);
  console.log(`Enjoy your Chai Bora!`);
}
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(3);
if ((numberOfCups) || numberOfCups <= 2) {
  console.log("Please enter a valid number of cups greater than 2.");
} else {
  calculateChaiIngredients(numberOfCups);
}
