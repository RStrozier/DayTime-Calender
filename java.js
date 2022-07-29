let plannerHeader = document.getElementsByClassName('display-3')
let timeBlocks = document.getElementById('timeButtons')
let pageSource =  document.getElementsByClassName('container')


// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
var date = '28-07-2022';
var currentDate = moment().format('dddd, MMM Do YYYY');
console.log(currentDate);
document.getElementById('currentDay').append.innerHTML = currentDate;




// rashida note moment.js

// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it 
// is in the past, present, or future
let past
let present
let future

// use moment to create time 

// WHEN I click into a timeblock
// THEN I can enter an event
let saveButton = document.getElementById('saveBtn')


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

let localStorage

// WHEN I refresh the page
// THEN the saved events persist

// CSS jQuery- believe this is how i can change the buttons based on text inputs?
$("btn").css("background-color", "yellow");
