// String search 
// include
const lyrics = 'tumi bondho kalaa pakhi ami jeno ki. bosonto kale tumai bolte pari nii'
const searchString = 'pakhi';
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);

// indexOf
console.log(lyrics.indexOf('tumi'));
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("kailla"));

// shorto sapekkhe khuja khuji 
if (lyrics.indexOf('pari') != -1) {
    console.log('exist inside the string');    
}else{
    console.log('cannot find it');
}

// // sratswith
console.log(lyrics.startsWith('tumi')); 
console.log(lyrics.startsWith('ami')); 

// endswith
const fileName = 'myBioData.pdf';
const therFileName = 'mypic.png';
console.log(fileName.endsWith('.pdf'));

