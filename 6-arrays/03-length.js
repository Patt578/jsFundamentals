let arr = [1,2,3,4,5];
let flippedArry = [];
for(let i = 0; i<= arr.length;i++){
    flippedArry[i] = arr[arr.length-i];
}

flippedArry.forEach(print => {console.log(print)});
// console.log(flippedArry);