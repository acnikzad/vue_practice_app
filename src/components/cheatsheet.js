// /* CSS Cheat Sheet */

// /* Basic Selectors */
// body { /* Selects the <body> element */
//   background-color: #f0f0f0;
// }

// p { /* Selects all <p> elements */
//   font-size: 16px;
//   color: #333;
// }

// .class-name { /* Selects all elements with class="class-name" */
//   margin: 20px 0;
// }

// #id-name { /* Selects the element with id="id-name" */
//   padding: 10px;
//   border: 1px solid #ddd;
// }

// /* Box Model */
// .box {
//   margin: 10px; /* Space outside the border */
//   padding: 10px; /* Space inside the border */
//   border: 2px solid #000; /* Border around the content */
//   width: 200px; /* Width of the content area */
//   height: 100px; /* Height of the content area */
//   box-sizing: border-box; /* Include padding and border in the element's width and height */
// }

// /* Flexbox */
// .flex-container {
//   display: flex; /* Enables flexbox */
//   justify-content: center; /* Aligns items horizontally */
//   align-items: center; /* Aligns items vertically */
//   flex-direction: row; /* Direction of items: row | row-reverse | column | column-reverse */
// }

// /* Grid */
// .grid-container {
//   display: grid; /* Enables grid layout */
//   grid-template-columns: auto auto auto; /* Defines columns */
//   grid-gap: 10px; /* Space between grid items */
// }

// /* Positioning */
// .positioned-element {
//   position: relative; /* relative | absolute | fixed | sticky */
//   top: 10px; /* Distance from the top */
//   left: 10px; /* Distance from the left */
// }

// /* Typography */
// .text {
//   font-family: 'Arial', sans-serif; /* Font family */
//   font-size: 20px; /* Font size */
//   font-weight: bold; /* Font weight: normal | bold | 100-900 */
//   line-height: 1.5; /* Line height */
//   text-align: center; /* Text alignment: left | right | center | justify */
//   color: #333; /* Text color */
// }

// /* Links */
// a:link { color: blue; } /* Unvisited link */
// a:visited { color: purple; } /* Visited link */
// a:hover { color: red; } /* Mouse over link */
// a:active { color: yellow; } /* Selected link */

// /* Responsive Design */
// @media screen and (max-width: 600px) {
//   .responsive-class {
//     flex-direction: column;
//   }
// }

// /* Transitions */
// .transition {
//   transition: all 0.3s ease-in-out; /* Smooth transition for all properties */
// }

// /* Animations */
// @keyframes example {
//   from { background-color: white; }
//   to { background-color: black; }
// }
// .animated-element {
//   animation-name: example; /* Refers to the keyframes */
//   animation-duration: 2s; /* Duration of the animation */
// }

// /* This cheat sheet includes basic styling, layout with Flexbox and Grid, positioning,
//    typography, responsive design principles, and simple transitions and animations. */


//    // JavaScript Cheat Sheet

// /* Variables and Data Types */
// let age = 25; // Number
// const name = 'John Doe'; // String
// let isActive = true; // Boolean
// let users = ['Alice', 'Bob']; // Array
// let user = { name: 'Alice', age: 30 }; // Object
// let undefinedVariable; // undefined
// let nullVariable = null; // null

// /* Strings */
// let greeting = 'Hello, World!';
// let length = greeting.length; // String length
// let uppercase = greeting.toUpperCase(); // Convert to uppercase
// let substring = greeting.substring(0, 5); // Extracts "Hello"

// /* Numbers */
// let integer = 10;
// let float = 10.5;
// let sum = integer + float; // Arithmetic operation
// let random = Math.random(); // Generates a random number between 0 and 1
// let rounded = Math.round(2.5); // Rounds a number

// /* Arrays */
// let fruits = ['Apple', 'Banana', 'Cherry'];
// fruits.push('Durian'); // Adds an item
// fruits.pop(); // Removes the last item
// let firstFruit = fruits[0]; // Accessing the first item
// fruits.forEach(fruit => console.log(fruit)); // Iterates over the array

// /* Objects */
// let person = {
//   name: 'John',
//   age: 30,
//   greet: function() { console.log('Hello, ' + this.name); }
// };
// console.log(person.name); // Access property
// person.greet(); // Call method

// /* Functions */
// function add(a, b) {
//   return a + b;
// }
// let sum = add(5, 3);

// // Arrow Function
// const subtract = (a, b) => a - b;
// let difference = subtract(5, 3);

// /* Conditional Statements */
// if (age >= 18) {
//   console.log('You are an adult.');
// } else {
//   console.log('You are a minor.');
// }

// /* Loops */
// // For loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // While loop
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// /* ES6+ Features */
// // Template Literals
// let message = `Hello, ${name}`;

// // Destructuring
// let { name, age } = person;

// // Spread Operator
// let clonedPerson = { ...person };

// // Default Parameters
// function greet(name = 'Guest') {
//   console.log('Hello, ' + name);
// }

// // Promises and Async/Await
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// async function fetchData() {
//   try {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // This cheat sheet covers basic and some advanced concepts in JavaScript.
// // For comprehensive details, refer to the official documentation or further resources.

// /* Vue.js Cheat Sheet */

// /* Creating a Vue Instance */
// // new Vue({ options }) - Core of every Vue application.
// const vm = new Vue({
//     el: '#app', // Connects Vue to a DOM element.
//     data: { // Declares reactive data properties.
//       message: 'Hello Vue!'
//     },
//     methods: { // Defines methods to be used in your application.
//       myMethod: function() {
//         console.log('Method called');
//       }
//     }
//   });
  
//   /* Template Syntax */
//   // {{ expression }} - Outputs the result of an expression to the DOM.
//   // v-bind:attribute="expression" or :attribute="expression" - Dynamically binds an attribute.
//   // v-model="dataProperty" - Creates a two-way data binding on form inputs.
  
//   /* Directives */
//   // v-if="condition" - Conditionally renders an element based on the truthiness of the expression.
//   // v-for="item in items" - Renders a list of elements based on an array.
//   // v-on:event="method" or @event="method" - Attaches an event listener that invokes a method.
//   // v-show="condition" - Toggles visibility based on the truthiness of the condition.
//   // v-html="htmlContent" - Outputs raw HTML to the DOM.
  
//   /* Computed Properties and Watchers */
//   computed: {
//     // Computed properties are calculated only when their dependencies change.
//     reversedMessage: function() {
//       return this.message.split('').reverse().join('');
//     }
//   },
//   watch: {
//     // Watchers react to changes on reactive data.
//     message: function(newValue, oldValue) {
//       console.log('Message changed from', oldValue, 'to', newValue);
//     }
//   }
  
//   /* Components */
//   // Defining a global component
//   Vue.component('my-component', {
//     props: ['myProp'], // Declares props for passing data to components.
//     template: '<div>{{ myProp }}</div>' // Template for the component.
//   });
  
//   // Local registration
//   const MyComponent = {
//     data: function() { // Component-specific data must be a function.
//       return { count: 0 };
//     },
//     template: '<button @click="count++">Clicked {{ count }} times.</button>'
//   }
  
//   /* Vue Instance Lifecycle Hooks */
//   // new Vue() instance goes through a series of initialization steps when created - lifecycle hooks.
//   created: function() {
//     // Called after the instance is created
//     console.log('Component created');
//   },
//   mounted: function() {
//     // Called when the instance is mounted to the DOM
//     console.log('Component mounted');
//   }
  
//   /* Event Handling */
//   // v-on directive listens to DOM events and runs some JavaScript when they’re triggered.
//   <button v-on:click="myMethod">Click me</button>
//   // Shorthand for v-on
//   <button @click="myMethod">Click me</button>
  
//   /* Vue Router */
//   // For adding client-side routing to Vue apps. Routes are defined and then passed to a VueRouter instance.
//   const router = new VueRouter({
//     routes: [
//       { path: '/home', component: Home },
//       { path: '/about', component: About }
//     ]
//   });
//   // Vue instance is then created with the router.
//   new Vue({
//     el: '#app',
//     router
//   });
  
//   /* Vuex for State Management */
//   // Centralized store for all the components in an application.
//   const store = new Vuex.Store({
//     state: { // Holds application state
//       count: 0
//     },
//     mutations: { // Change state in a Vuex store is by committing a mutation
//       increment(state) {
//         state.count++
//       }
//     }
//   });
//   // Access state and commit mutations in components
//   this.$store.commit('increment');
  
//   /* This guide is a quick overview. For more details, visit Vue.js official documentation. */