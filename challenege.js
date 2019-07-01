// let c = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
// let v = ['a','e','i','o','u'];


// function pigLatin(string){
//     let latin = '';
//     for(let i =0; i< c.length;i++){
//         if(string[0] == c[i]){
//             latin = string;
//             let firstChar = latin.charAt(0);
//             latin = latin.slice(1,latin.length);
//             latin += firstChar + 'ay';
//             return latin;
            

//         }else if(string[0] == v[i]){
//             latin = string +'ay';
//             return latin;
//         }
//     }
   
// }

// console.log(pigLatin('latin'));

function objChecker() {
    let obj = {
      name: "hi",
      location: "Indiana",
      age: 34,
      isHandsome: true
    };
  
    //Write a conditional that will check the value of one property in an
    //object and return a message. Using string interpolation, the message
    // should take the type of the property and return 'The value is ${type}'. For instance, if sampleObject.sampleKey is a string,
    // it return'The value is a string'.  If sampleObject.sampleKey is a number, it will console.log 'The value is a number'.
    // Make sure your conditional works for strings, numbers, and booleans. Use the object above
    
  let arrValues =  Object.values(obj);
  for(let i = 0; i < arrValues.length; i++){
      if(arrValues[i] === String){
        let type = typeof arrValues[i];
          return `This is a ${type}`;
      }else if(arrValues[i] === Number){
          let type = typeof arrValues[i];
          return `This is a ${type}`;
      }else if(arrValues[i] === Boolean){
          let type = typeof arrValues[i];
          return `This is a ${type}`;
      }
  }

}
  console.log(objChecker());