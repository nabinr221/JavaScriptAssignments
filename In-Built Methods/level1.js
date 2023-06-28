// write a code that generates random number from 1 to 5

function getRandomNumber() {
  const number = Math.random();
  const randomNumber = Math.floor(number * 5) + 1;
  return randomNumber;
}
const randomNum = getRandomNumber();
console.log(randomNum);
