'use strict';

//Use jQuery and the 'keyup' event to say "good morning" to whoever's name 
//is typed into the #toGreet input. 
// - The greeting should dynamically change as you type!
// - The person's name should be _emphasized_ or otherwise formatted with css!

//Don't forget to wrap your script in a callback so it runs when the document
//has loaded.

   //register an event callback
   $('#toGreet').keyup(function() {
       //when event occurs...
       var name = $(this).val();
       $('#enterHere').text("Hello " + name);
   });
