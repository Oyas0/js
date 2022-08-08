var shopingCard = {
    books: 3,
    sunGlass:1,
    keyBoard:5,
    mouse:10,
    pen:20,
}

// when you know the proparty name,use dot natation to get the proparty value
var penCount = shopingCard.pen;
//  alternative system
// when you know the spacific proparty name,use dot notation to get the proparty value
var penCount2 = shopingCard['pen'];

var propartyName = 'books';

var propartyValue = shopingCard[propartyName];
console.log(propartyName, propartyValue);
var proparties = Object.keys(shopingCard);
var propartyValues = Object.values(shopingCard);
console.log(propartyValues);
console.log(proparties);

console.log(shopingCard);


/** set property value */
shopingCard.mouse = 15;
console.log(shopingCard);
shopingCard['mouse'] = 29;
console.log(shopingCard);
// shopingCard[mouse] = 89;
// console.log(shopingCard);

