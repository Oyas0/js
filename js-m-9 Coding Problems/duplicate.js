const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'abuk', 'cabul', 'dabul', 'abul', 'cabul','abal', 'abuk', 'cabul', 'dabul', 'abul', 'cabul','abal'];

function removeDuplicate(names) {
    const unique =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name); 
        } 
    }    
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);