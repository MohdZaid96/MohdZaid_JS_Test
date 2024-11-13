**Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.**

->A closure happens when you have a function inside another function, and the inner function keeps access to the outer function's variables even after the outer function finishes running.

    Ex:-function createCounter() {
        let count = 0; 
        return function() { 
            count++;
            return count;
        };
        }

const counter = createCounter();
console.log(counter());
console.log(counter());

**Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.**

->var:
    -Works within the function-scoped.
    -It got Hoisted to the top of the scope.
    -Can be re-declared and re-initialized
let:
    -It is a block-scoped.
    -Hoisted too but isn't initialized immediately, it will throws an error if used before  declaration.
    -Can be re-initialized
const:
    -it’s also block-scoped and hoisted with an uninitialized state.
    -Once assigned, you can't reassign const variables, but if it's an object or Array, you can change its properties.

**What are the differences between a programming language and a scripting language? Where does JavaScript fit in?**

->  -Programming languages are usually compiled and can create standalone applications (e.g., C, Java) .
    -Scripting languages are often interpreted and used to control or automate other programs (e.g., JavaScript, Python).

    -JavaScript started as a scripting language for web browsers but has evolved into a full-featured language, used in everything from websites to backend servers.

