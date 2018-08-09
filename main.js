
// select the element that the user might click / button - save it to a variable

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var zero = document.querySelector('#zero');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var times = document.querySelector('#times');
var divide = document.querySelector('#divide');

//add event listener on that element
    // in that event listener's function: find out what the value of that button is (is it a 2? Is it a +?)
      // console.log that value

one.addEventListener ('click', function(){console.log(one.value)})
two.addEventListener ('click', function(){console.log(two.value)})
three.addEventListener ('click', function(){console.log(three.value)})
four.addEventListener ('click', function(){console.log(four.value)})
five.addEventListener ('click', function(){console.log(five.value)})
six.addEventListener ('click', function(){console.log(six.value)})
seven.addEventListener ('click', function(){console.log(seven.value)})
eight.addEventListener ('click', function(){console.log(eight.value)})
nine.addEventListener ('click', function(){console.log(nine.value)})
zero.addEventListener ('click', function(){console.log(zero.value)})
plus.addEventListener ('click', function(){console.log(plus.value)})
minus.addEventListener ('click', function(){console.log(minus.value)})
times.addEventListener ('click', function(){console.log(times.value)})
divide.addEventListener ('click', function(){console.log(divide.value)})



// take that value and insert it in to the DOM in the right place
   // select the display element
   // add text to that element

   var display = document.getElementById("display")
    display.innertext = 'display';
   