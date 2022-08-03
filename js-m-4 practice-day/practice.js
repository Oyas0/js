1. 
// জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?

2. 
//জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?

3. 
//ভেরিয়েবল কি জিনিস?

4. 
//ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 

5. 
//ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 

6. 
//কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)

7. 
//জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 

8. 
//ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 

9. 
//দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 

10. 
//শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 

11. 
//++ এবং -- এর কাজ কি ? এইটা কি জানো। 

12. 
//parseInt, parseFloat, toFixed এইগুলা কি করে? 

13. 
//Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় ??

/*Ans:ভ্যারিএবেলের মত ডিক্লেয়ার করে ,তবে মান রাখতে হয় থার্ড ব্রাকেটের মাঝে,মান গুলোর মাঝে কমা এবং গ্যাপ দিতে হয়।*/

14. 
//array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে??
/**
 * The way to find out number of element.
 * var elementNUmber= [23,34,34,345,453,33,12]
 * console.log(elementNumber);
 */
15. 
// 1.array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে?? 2.কত দিয়ে শুরু হয়??3.মান কিভাবে চেইঞ্জ হয়??

/** 1.How index position work??*/
    // var numb = [23,34,45,34,44,34];
    // console.log('index position');
    // console.log(numb[2]);
    // console.log(numb[3]);
    // console.log(numb[4]);

 /** 2.Index position Start from where??*/
    //index start from 0.index 0 means frist positional number.

/** 3.How to changes value??*/
    // var numbers = [23,34,45,56,67,78,12,12];
    // numbers[3] = 65;
    // numbers[4] = 1005;
    // console.log('Changing value');
    // console.log(numbers);

16. 
//কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
/**there is no elements in this value*/ 

17. 
//কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো??
/** how to find elements value use of index*/
    // var numbers = [23,34,45,56,67,78,12,12];
    // var elem = numbers[3];
    // console.log('finding value');
    // console.log(elem);


18. 
//কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে??

/** 3.How to changes index position in array??*/
    // var numbers = [23,34,45,56,67,78,12,12];
    // numbers[3] = 65;
    // numbers[4] = 1005;
    // console.log('Changing value');
    // console.log(numbers);

19. 
//একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
    // var numbers = [23,34,45,56,67,78,12,12];
    // var positionIndex = numbers.indexOf(67);
    // console.log( 'find index number');
    // console.log(positionIndex);

 
20.
// ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
21.
// কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে.
 /** How to add element to an array as the last element of array??*/
    // using the push
    // var friends  = ['balam','kaalm','salam','jalam']
    // friends.push('pailam')
    // console.log('pushing item');
    // friends.pop();
    // console.log(friends);


    //    var amrai = ['ratul','rayhan','fahad','abdullah','shawon','rasel','khokon'] 
    //    amrai.push('Rohingha');
    //    console.log('Rohingha added in amrai');
    //    console.log(amrai);
/** How to kick element to an array as the last element of array??*/
    //using the pop
//     var friends  = ['balam','kaalm','salam','jalam']
//     friends.pop();
//     console.log('poping item');
//     console.log(friends);


    //    var amrai = ['ratul','rayhan','fahad','abdullah','shawon','rasel','rohingha'] 
    //    amrai.pop();
    //    console.log('Kick outing Rohingha ');
    //    console.log(amrai);
// 22.
// কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

23.
// তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
24.
// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।
    var mac = 80000;
    var money = 20000;
    if (money >= 80000) {
        console.log('Ami mac kinbo');
    }
    // }else if (money >= 60000) {
    //     console.log('Gaming laptop is best');
    // }
    else {
        console.log('Amar moto goriber jonno mobile best.');
    }
25.
// আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
26.
// while লুপ কিভাবে কাজ করে 
27.
// for লুপ কিভাবে কাজ করে 
28.
// while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
29.
//  একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
30.
// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
31.
// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
32.
// while আর for loop এর মধ্যে পার্থক্য কি 
33.
// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
34. 
// তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 
35. 
// একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
36.
// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 










