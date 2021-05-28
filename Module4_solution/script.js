(function (){  // Wraps the entire content in an IIFE so that variable refrences and values work properly and are assigned correctly.

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];  // Creates object with already defined properties

for (var i = 0; i < names.length; i++) {  // For loop to run the code until the last name in the object properties is printed.

  var firstLetter = names[i].charAt(0).toLowerCase();  //  Gathers the first letter of each indexed property

  if (firstLetter == "j") {
  byeSpeaker.speak(names[i]);
  } // if end

  else {
   helloSpeaker.speak(names[i]);
    }  //else end

  }  // loop end
})();  // IIFE end.
