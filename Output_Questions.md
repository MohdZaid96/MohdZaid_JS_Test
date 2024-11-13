1. `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`
    
    **Question:** What will be the output? Explain why.
    ->Output:
        Start
        End
        Promise
        Timeout

    Explanation:-First code will and console Start and then he encounter setTimeout and handle is by sending it to queue and continue running stacks content and then encounter promise and also handles by setting its execution before setTimeout as it gives priority to priority to promise over async task,then it ir encounter log statement End and print at the same time and then Promise and them setTimeout
                
    
2. `let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);`
    
    **Question:** What will be the output? Explain why shallow copy behaves this way.
    Output:3

    Explanation:-It creates a shallow copy, They both refer to the same nested object, so changing one also changes original.


    
3. `for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}`
    
    **Question:** Explain the output difference between the two loops and why this behavior occurs with `var` and `let`.

    Output:4
                4
                4
                1
                2
                3

    Explanation:
        -var is function-scoped, so each setTimeout shares the same i. By the time it logs, i has become 4 after the loop.
        -let is block-scoped,Each setTimeout captures the value of j at that point.
    
4. `let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);`
    
    **Question:** What will be the output? Explain how JavaScript treats objects when assigned to another variable.

    Output:20

    Explanation:
       Objects in JavaScript are assigned by reference, meaning obj1 and obj2 point to the same memory location.because they’re the same object change in one can result in change in same location.