// # Arrow function and keyword this

// * Using old functions
const person = {
  firstName: "Viggo",
  lastName:"Mortensen",
  fullName: function(){
    return `${this.firstName} ${this.lastName}`
  }
}

person.fullName(); // returns: "Viggo Mortensen"


// * Arrow function and keyword this
const person2 = {
  firstName: "Viggo",
  lastName:"Mortensen",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`
  }
}

person2.fullName(); // returns: "undefined undefined"
// - in the arrow cunction the keyword "this" binds to the scope, where it was created. That is the windown object

// * This in setTimeout context

const person3 = {
  firstName: "Viggo",
  lastName:"Mortensen",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function() {
    setTimeout(function(){
      console.log(this.fullName()); // in this context "this" is the window object
    }, 1500 )
  }
}

person3.shoutName(); // Error:
// script.js:37 Uncaught TypeError: this.fullName is not a function. We have an error because in this context "this" refers to window 

// * This in setTimeout context

const person4 = {
  firstName: "Viggo",
  lastName:"Mortensen",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function() {
    setTimeout(() =>{
      console.log(this.fullName()); // in this context "this" is the window object
    }, 1500 )
  }
}

person4.shoutName(); // returns: undefined undefined