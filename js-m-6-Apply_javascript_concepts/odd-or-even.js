// console.log("Start odd number");
// console.log(4/2);
// console.log(12/2);
// console.log(14/2);
// console.log(16/2);
// console.log(18/2);
// console.log("Start even number");
// console.log(4/2);
// console.log(13/2);
// console.log(15/2);
// console.log(17/2);
// console.log(19/2);

// /** vagshesh dekha */
// console.log(34%2);
// console.log(34123%2);
// console.log(312%2);
// console.log(3321%2);
// console.log(35%2);


function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder == 0) {
    console.log('number is even');      
    }
    else{
        console.log('number is odd');
    }
}

isEven(303);
isEven(302);
isEven(301);
isEven(304);
isEven(305);
isEven(306);



function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder == 0) {
    return true;     
    }
    else{
        return false;
    }
}

const myNumber = isEven(305);
console.log( myNumber);
const herNumber = isEven(400);
console.log(herNumber);