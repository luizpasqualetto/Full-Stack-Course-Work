(function (){   // Wraps the entire content in an IIFE so that variable refrences and values work properly and are assigned correctly.

var byeSpeaker = {}; // Creates an object so we can set a property to it later.

var speakWord = "Good Bye"; 

byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}   // We define that the speak property of the byeSpeaker object is a function that produces a specific console log.

window.byeSpeaker = byeSpeaker;  // Exposes the byeSpeaker object to the global window

})();  // IIFE end.