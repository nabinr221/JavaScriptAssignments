//Q1: calculate the percentage he scored in the exams out of total 150 score

const obj = {
  computer: 42,
  maths: 42,
  science: 50,
};
// Ans:
const totalScore = obj.computer + obj.maths + obj.science;
const percentageScore = (totalScore / 150) * 100;
console.log(`The percentage score is: ${percentageScore}%`);

// Q2:
const userDetails = {
  name: 'kaylin',
  maths: 23,
  science: 35,
  gk: 30,
};
// expected answer
/*
 {
    userName: 'kaylin',
   subjectCodes: ['M','S', 'G'],
   subjectScores: [23,35,30]
}
 */
const transformedUserDetails = {
  userName: userDetails.name,
  subjectCodes: Object.keys(userDetails)
    .filter((key) => key !== 'name')
    .map((key) => key.charAt(0).toUpperCase()),
  subjectScores: Object.values(userDetails).filter(
    (value) => typeof value === 'number'
  ),
};

console.log(transformedUserDetails);