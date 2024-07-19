// Assigning a Function as an Event Handler in JavaScript: 
function sayThanks() {
    alert('Thanks!');
  }
  
// When we want to assign an existing function as an event handler in JS, such as onclick, we should assign the function name without parentheses.
  elem.onclick = sayThanks; // Correct: sayThanks is the function itself. When elem.onclick is triggered (like when elem is clicked), it will execute sayThanks().

  elem.onclick = sayThanks(); // Wrong: It immediately executes sayThanks and assigns its return value.This is not what we want because elem.onclick expects a function to call when the event occurs, not a return value.
  

// In HTML:

// <input type="button" id="button" onclick="sayThanks()">
// In HTML , we use parentheses after the function name to indicate it should be called when the event occurs. The browser treats sayThanks() as a function call in this context.

// BROWSER's behaviour : it reads sayThanks() as:-
button.onclick = function() {
    sayThanks(); // This function is created based on the attribute content
};
  
//SUMARRY: 
// In JS: function name without parentheses.
// In HTML: function name with parentheses.
// Adding a handler with JS overwrites the existing handler.


// AddEventListener & removeEventListener:- 

// addEventListener ----> used to assign multiple handlers to an event.
// Syntax ---->
//element.addEventListener(event, handler, [options]);

// To remove a handler we should pass exactly the same function as was assigned.
//element.removeEventListener(event, handler, [options]); 

//eg: 
function handler() {
    alert( 'Thanks!' );
  }
  
input.addEventListener("click", handler);
input.removeEventListener("click", handler);
//if we don’t store the function in a variable, then we can’t remove it.There’s no way to “read back” handlers assigned by addEventListener.


// Multiple calls to addEventListener allow it to add multiple handlers, like this:
<input id="elem" type="button" value="Click me"/>
function handler1() {
    alert('Thanks!');
  };

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert("Hello");
  elem.addEventListener("click", handler1); // Thanks!
  elem.addEventListener("click", handler2); // Thanks again!
