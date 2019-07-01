let arr1 = [10,20,30,40,50,70];
let arr2 = [5,3,2,5];

function newArry(arr1,arr2){
    let arr3 = [];
    for(let i =0; i <arr2.length;i++){
arr3[i] = (arr1[i]*arr2[i]);
    }
    console.log(arr3);

}

newArry(arr1,arr2);