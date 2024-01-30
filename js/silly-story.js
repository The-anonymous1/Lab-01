// VARIABLE DECLARATIONS 
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// STORY STRING 
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// ARRAYS FOR STORY PARTS 
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// RANDOM VALUE FUNCTION
function randomValueFromArray(array){
  return array[Math.floor(Math.random() * array.length)];
}

// EVENT LISTENER 
randomize.addEventListener('click', result);

// RESULT FUNCTION 
function result() {
    // CREATE NEW STORY VARIABLE 
    var newStory = storyText;

    // GENERATE RANDOM ITEMS 
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // REPLACE PLACEHOLDERS IN STORY 
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // REPLACE CUSTOM NAME 
    if(customName.value !== '') {
      newStory = newStory.replace('Bob', customName.value);
    }

    // METRIC CONVERSION 
    if(document.getElementById('metric').checked) {
        var weight = Math.round(300 * 0.453592) + ' kilograms';
        var temperature =  Math.round((94 - 32) * 5 / 9) + ' celsius';
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    // DISPLAY NEW STORY 
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
