
// let tipCalc = (moneySpent) => {return moneySpent * 1.15};
// let finalAmount = tipCalc(20);
// console.log(finalAmount);

// let count = 0;
// for ( ;  count < 9; ++count ) {
//   console.log(count);
// }
let counter = 1;
function checker(word) {
  let wordLength = word.length;
    for(let n of word){
      if(n !== word[wordLength-counter]){
       return 'This is not a palindrone';
      }else{
        return word;
      }
    }
}
console.log(checker("racecar"));

// var l = word.length;
// for (var i = 0; i < l / 2; i++) {
//     if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//         return false;
//     }
// }
// return true;