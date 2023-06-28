/**
 * Q1 find if hari is in allUsers array or not
 * expected output is : True
 */

const name = 'hari';
const allUsers = ['shyam', 'thakur', 'hari'];
// answers
const value = allUsers.includes(name);
console.log(value);

/**
 * Q2 find number of duplicates
 * expected output is : 2
 * true
 */
const user = 'hari';
const userArr = ['hari', 'shyam', 'hari', 'thakur'];

//Q2: answers 1:
let count = 0;
for (const element of userArr) {
  if (element === user) {
    count++;
  }
}
console.log('Number of duplicates:', count); //output: Number of duplicates: 2

//Q2: answers 2:
userArr.filter((item) => {
  if (item === user) {
    count++;
  }
});
console.log('Number of duplicates:', count); //output: Number of duplicates: 2

//Q2: answers 3:
userArr.map((item) => {
  if (item === user) {
    count++;
  }
});
console.log('Number of duplicates:', count); //output: Number of duplicates: 2
