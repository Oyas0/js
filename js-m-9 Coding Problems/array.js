// string
const country = 'Bangladesh';
// number
const age = 52;
// boolean
const isIndependent = true;
// abject
const student = {id:121,class: 12,name:'bagun'};
// array X number
const friends = [12,12,23,34,435,3,212,1,23];
// function
function add(num1,num2) {
    return num1 + num2;    
}
console.log(typeof country);

console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student );


// check array using Array.isArray
console.log(typeof Array.isArray(friends) );
console.log(typeof add);

// array er majhe upadan khujar upai
console.log(friends.includes(12));
console.log(friends.includes(2121));

// concat : mane duita array ek sathe jora diye ekta array banano hoy

const friendsAge = [12,23,34,65,6,5];
 const allFirends = friendsAge.concat(friends);
 console.log(allFirends);