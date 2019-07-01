var customName;
var randomize =  document.getElementById('bb');
var story = document.getElementById('story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX =["Willy the Goblin","Big Daddy","Father Christmas"];
let insertY =["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle", "turned into a slug and crawled away"];

randomize.addEventListener('click',result); 



function result(){
    var name = document.getElementById('name').value;
    let newStory = ''; 
    let xitem = insertX[Math.floor(Math.random()*insertX.length)];
    let yitem = insertX[Math.floor(Math.random()*insertY.length)];
    let zitem = insertX[Math.floor(Math.random()*insertZ.length)];
    

    if(customName.value !== ""){
        newStory;
    }

    if(document.getElementById("uk").checked) {
        var weight = Math.round(300);
        var temperature =  Math.round(94);
        storyText.replace(':insertx:',xitem);
        storyText.replace(':inserty:',yitem);
        storyText.replace(':insertz:',zitem);

        storyText.replace('94 fahrenheit', temperature + ' centigrade');
        storyText.replace('300 pounds', weight + ' stones');

        newStory = storyText;
        
      }else{


      }

      story.textContent = newStory;
      story.style.visibility = 'visible';
    
}