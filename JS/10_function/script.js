// # Try and Catch

// - if ther e might be an error in the code, we can catch it and execue some other code in order not to break the script

// - easy way is to execute something, that doesnt exists

// run code even if there was no "hello" defined. : 
/* hello.toUpperCase(); */// returns: Uncaught ReferenceError: hello is not defined at script.js:7

/*
try {
  hello.toUpperCase();
} catch {
  console.log("Error!");
}
*/

function yell(msg){
  try {
    msg = `${msg} `;
    console.log(msg.toUpperCase().repeat(3));
  } catch(e) { // Param "e" allows us to get the Error message.
    console.log(e);
    console.log("Please pass in a valid string.");
  }
}