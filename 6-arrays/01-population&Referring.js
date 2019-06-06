let list = ['yo','cow','goose'];
console.log(typeof list);

let students = ['Tony', 'Marshall', "Rhys",'Ray',23,true,['Cory','Garrett','Brian']];
console.log('Hello, you look nice today', students[0][2]);


// Array methods


let food= ['pie','pizza','hotdog'];
food.push('Pineapple');
food.splice(1,1,'Bananas');
console.log(food);

//forEach() method executed a provided function once for each array element

food.forEach();

let movies = ['Alien','2001 a space odessy','princess mononoke'];
movies.push('The Revenant');
movies.splice(1,1,'SpiderMan 3');
movies.forEach(function(element){
    console.log(element);
});