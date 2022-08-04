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

/** is that number is odd ?? or even?? */

// function isEven(number) {
//     const remainder = number % 2;
//     if (remainder == 0) {
//         console.log('number is odd');
//     } else {
//         console.log('number is even');
//     }
// }

// isEven(302);
// isEven(303);
// isEven(304);
// isEven(304);
// isEven(305);
// isEven(306);



// function isEven(number) {
//     const remainder = number % 2;
//     // console.log(remainder);
//     if (remainder == 0) {
//     return true;     
//     }
//     else{
//         return false;
//     }
// }

// const myNumber = isEven(305);
// console.log( myNumber);
// const herNumber = isEven(400);
// console.log(herNumber);

        /** is the year is leap year */
        /**  program to check leap year */
function isLeapYear(number) {
    const remainders = number % 4;
    const remainders1 = number % 100;
    const remainders2 = number % 400;
    // console.log(remainders);
    if ((remainders == 0) && (remainders1 != 0) || (remainders2 == 0)) {
    console.log('the year is leap year');      
    }
    else{
        console.log('The  year is not leap year');
    }
}
// isLeapYear(2);
isLeapYear(2021);
isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2022);

// isLeapYear(2);



    
// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const theYear = 2002;
// const isThatLeapYear = checkLeapYear(theYear);
// console.log(isThatLeapYear);


// const theYear1 = 1900;
// const isThatLeapYear1 = checkLeapYear(theYear1);
// console.log(isThatLeapYear1);