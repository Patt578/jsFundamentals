// Object.keys();
// Object.values();


let garden ={
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'apple',
    water: true,
    sun: true,
    size: 10
}

let x = 'vegetable';
// console.log(garden[x]);       // both return zucchini
// console.log(garden.vegetable);

let baking = {};

baking['zucchini'] = 'better make some bread!'; //creating a new key value pair


let pie = {};

pie['apple'] = 'Pie pie pie';

let key = 'water';

//loop through an objects keys and search for the key 'water'

Object.keys(garden).forEach(g => {
    if(key === g){
        console.log(garden[key]);
    }
})




