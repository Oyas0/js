// const inches = 12;
// const myFeet  =inches / 12;
// console.log('My height: ',myFeet);

// const dadasInches = 144;
// const dadasFeet = dadasInches / 12;
// console.log('MY dadas height:',dadasFeet);

// const dadiInches = 60; 
// const dadisFeet = dadiInches / 12;
// console.log('Dadisfeet:', dadisFeet);

      /** nana dadar height ber kora  */

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadasInches = 144;
const dadaFeet = inchToFeet(dadasInches);
console.log('Dadas feet',dadaFeet);

const nanainches = 64;
const nanaFeet = inchToFeet(nanainches);
console.log('nanas feet:',nanaFeet);

           /** kilometer to mile ber kora  */

function kiloToMiles(Kilometer) {
    const miles = Kilometer * 0.621371;
    return miles;
}

const dadarBari = 621.371;
const dadarBariDuroto = kiloToMiles(dadarBari);
console.log('dadar barir durutoo in miles:' , dadarBariDuroto);  

const nanarbari = 120;
const nanarBarirDurutoo = kiloToMiles(nanarbari);
console.log('nanar barir durutoo in mile:' , nanarBarirDurutoo);


const dadaTOnana = 220;
const nanaTodadarDurutoo = kiloToMiles(dadaTOnana);
console.log('Nanar Bari Hote Dadar Barir Durutoo:' , nanaTodadarDurutoo);