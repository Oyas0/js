const lyrics = 'tumi bondho kalaa pakhi ami jeno ki. bosonto kale tumai bolte pari nii'
const parts = lyrics.split(' ');
const chrs = lyrics.split('');
const sentances = lyrics.split( '.');

// console.log(lyrics);
// console.log(sentances);
// console.log(parts);
// console.log(chrs);

// slice
const partial = lyrics.slice(5, 11);
// console.log(partial);

const arrayToString = [
'tumi bondho kalaa pakhi', 
'ami jeno ki',
' bosonto kale tumai', 
'bolte pari nii'];
const joins = arrayToString.join(" --------- ");
console.log(joins);

