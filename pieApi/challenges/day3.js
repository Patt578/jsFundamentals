let str = 'Welcome to eleven fifty';

function checkString(str){
    let tempStr = '';

    if(str !='' && str.length < 30 && str.length > 0){

        let words = str.split(' ');

        for(let i =0;i<4;i++){
           
            let word = words[i];

        
            if(word.charAt(0) == 'e' || word.charAt(0) == 'f'){
            
              word[0].toUpperCase();
            
            }

            tempStr += word + ' ';
            
        }

    }else{
        console.log('String must not be empty or exceed 30 characters');
    }

    return tempStr;

}
console.log(checkString(str));