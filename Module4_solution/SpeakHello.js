(function (){   // Wraps the entire content in an IIFE so that variable refrences and values work properly and are assigned correctly.

var helloSpeaker = {}; // Creates an object so we can set a property to it later.

var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}  // We define that the speak property of the helloSpeaker object is a function that produces a specific console log.)

window.helloSpeaker = helloSpeaker;  // Exposes the helloSpeaker object to the global window)

})();  // IIFE end.