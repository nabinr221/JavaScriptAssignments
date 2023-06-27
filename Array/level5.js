//Q1 calculate the sum of the array using either for of or for in

const arr = [2, 5, 6, 7];
let sum = 0;

// Q1: answer using for of
for (const item of arr) {
  sum += item;
}
console.log('Sum of the array:', sum);

// Q1: answer using for in
for (const item in arr) {
  sum += arr[item];
}
console.log('Sum of the array:', sum);

//high level Question
// Q.2:
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate

const users = ['hari', 'shyam', 'hari'];

// Q2: Answer:
const uniqueUser = users.filter((item, index) => users.indexOf(item) === index);
console.log(uniqueUser);

//Q3: calculate the sum of all the odd numbers inside this nested array
const newArr = [
  [4, 5],
  [5, 7],
  [7, 2],
];

// Q3:Answer : using map method()
// Ouput => Sum of odd numbers: 24
let sumArr = 0;
newArr.map((item, index) => {
  item.map((item2, index) => {
    if (item2 % 2 !== 0) {
      sumArr += item2;
    }
  });
});
console.log('Sum of odd numbers:', sumArr);

// Q3:Answer : using for of loop:
// Ouput => Sum of odd numbers: 24
let sumForOf = 0;
for (const innerArr of newArr) {
  for (const num of innerArr) {
    if (num % 2 !== 0) {
      sumForOf += num;
    }
  }
}
console.log('Sum of odd numbers:', sumForOf);

//Q4: return only array of ids: expected output  [3,5,6]
const myDetails = [
  { id: 3, name: 'hari' },
  { id: 5, name: 'shyam' },
  { id: 6, name: 'gopal' },
];
// Q4:Answer: output=> [3,5,6]
const myDetailsID = myDetails.map((item, id) => {
  return item.id;
});
console.log(myDetailsID);

// Q5 :loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]

const userDetails = [
  { score: 0, name: 'hari', marks: [10, 3, 23] },
  { score: 0, name: 'shyam', marks: [50, 23, 23] },
  { score: 0, name: 'shyam', marks: [20, 13, 43] },
];

// Q5: Answer 1: Usign map method()
userDetails.map((item, index) => {
  const sum = item.marks.reduce((acc, cur) => acc + cur);
  item.score = sum;
});
console.log(userDetails);

// Q5: Answer 2: Usign for of loop
for (const user of userDetails) {
  const sum = user.marks.reduce((acc, cur) => acc + cur, 0);
  user.score = sum;
}
console.log(userDetails);
