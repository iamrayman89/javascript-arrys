const number = [1,2,3];

console.log(number);

// const moreNumber = new Array(5);

// console.log(moreNumber);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumber);

// const ul = document.querySelectorAll('li');
// console.log(ul);

// const moreNumbers =  Array.from(ul);
// console.log(moreNumbers);

// const anlyticsData = [[1,1.5],[6,-9]];

// for (const data of anlyticsData){
//     for(const dataPoints of data){
//         console.log(dataPoints);
//     }
// }

// const hobbies = ['Sport' , 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);
// console.log(poppedValue);

// hobbies.splice(0,0, 'Good food');

// console.log(hobbies);

const testResult =  [1,3,13,34,4,74];
const newResult = testResult.slice();

testResult.push(8.9);

console.log(newResult, testResult);

