// creating a function which will be the 
//prototype for the object to be created later 
function fruits() { 
    this.name = 'fruit 1'; 
   }
   // creating a function to whose object will 
   // inherit properties from the prototype 
   // using object.create() method 
   function
   apple() { 
    fruits.call(this); 
   }
   // creating an object of the apple function which 
   // will have properties of the prototype 
   // object i.e. fruits 
   apple.prototype = Object.create(fruits.prototype); 
   const app = new apple();
   // Displaying the created object 
   console.log(app.name); // fruit 1

   var fruit = Object.create(fruits.prototype);
   console.log(fruit.name); // undefined



   //sem a funcao numa variavel e sem o prototype.... o retorno sera somento o nome da funcao mae.

   var fruit2 = Object.create(fruits);
   fruit2.name = 'banana';
   console.log(fruit2.name); // fruits


  var fruit2 = Object.create(fruits.prototype);
   fruit2.name = 'banana';
   console.log(fruit2.name); // banana



   var fruit1 = new fruits();  
   console.log(fruit1.name); // fruit 1

//////////////////////////////////////////////////////////////////////////

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"
  