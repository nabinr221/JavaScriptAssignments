//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600

const rideDetails = {
  pickup: 'balaju',
  destination: 'thamel',
  distance: '20km',
  unitKmPrice: 30,
};

//Q1: Answer:
function calculateFinalPrice(rideDetails) {
  const distance = parseFloat(rideDetails.distance); // Extract the numeric value from distance string
  const unitKmPrice = rideDetails.unitKmPrice;
  const finalPrice = distance * unitKmPrice;
  return finalPrice;
}

const finalPrice = calculateFinalPrice(rideDetails);
console.log('Final Price:', finalPrice);

// ===================================================
//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 = {
  status: 'onTheWay',
};
const status2 = {
  status: 'success',
};
const checkIfSucces = (statusObj) => {
  return statusObj.status === 'success';
};

console.log(checkIfSucces(status1)); //should return false
console.log(checkIfSucces(status2)); //should return true

