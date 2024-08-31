# :mag: Learning About Closures

While working on imporving my JavaScript skills with projects provided by freecodecamp, I came across a project that was about creating FAQs. What was confusing for me was how the event handler knew which question I had selected. When I googled this, the results were showing a lot of informaiton about closures. 

## :scroll: Brief Points on What I Learned:

1. I learned that closures are 'pointers', that they point to the function and to the variables, these variables could  be in the local scope of the function, or some global variable is accessed in the local scope of the function. To me, the 'local scope' means the body of the function, so, everything inside the curly braces. More about it below...
2. **Scope** came up a lot while I was learning about closures. Temporal Dead Zone also came up and I learned that they are related to the 'time'. Meaning, for variables defined with let and const keywords, until the time we reached to the line of code where these variables are initialized with values, they will remain in the TDZ.
3. I learned the difference between **block scope** and **local scope**. Interestingly enough, I experimented a little and realized that a variable declared in the block scope (if condition inside the function's local scope) was inaccessible from the function's scope. The two solutions I know for this is
    * Either create the variable in the function scope without initializing it or,
    * wrap the if condition in a nested function.

  But, because let and const varialbles are not accessible in the function scope when declared in the block scope, we can have variables with the same name in the block and function scope and they wont affect each other. Var turned out to be quite unique while I experimented with all three let, const and var keywords. I learned that var is function-scoped. If we have a variable declared with 'var' in the block scope(if or while loop etc), it **was** accessible by the function containing the condition. But, when I wrapped the if block in a nested function inside my main function, var was only scoped to the nested function.
  
4.  JavaScript resolves variable references based on their lexical (static) position in the code. Each function looks for the variable in its own scope first before looking up the chain of parent scopes.
5.  I won't go too much into Execution Context and Call Stack right now because I am still learning. But 'looking for a variable's value' is recursive, look for it in the local scope, if not look up higher...
6.  I understand closures well when thinking in terms of nested functions being able to access the variables in thier parent function's scope. Closures help functions give access to the 'outer lexical environment/scope'. Function's 'inner lexical environment/scope' would be its own block.
7.  MDN web docs also use the word 'location' when discussing 'lexical scope'. I understood from the document that lexical scope is 'where the variable is located' in our code. According to MDN docs, the most common way we use closures in frontend development is with events.
8.  On the matter of where the closures are stored, I found out on stack overflow that they are stored in heap. But I am still looking for this information. I learned a lot about it [here][1] as well.
9.  In my mind, a closure in an event handler would be stored inside the heap. When the user interacts with the button, The callback function of the event handler will wait in the task queue/call backqueue of the JS runtime environment in the browser. The event loop will check if the call stack is empty and then send the callback to the callstack.

## :crystal_ball: Future Learning
I plan on improving the use of closures and my understanding of them. I have seen how they are used in event handlers, I will also see where else we can use closures. 

## :blush: Contact me
If you have any suggestions or want to share knowledge about closures, feel free to reach out!

:star2: GitHub: uroobaCodes
:star2: Email: urooba.codes@gmail.com




  [1]:http://dmitrysoshnikov.com/ecmascript/chapter-6-closures/#closure    
  
