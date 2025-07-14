# Intro 
In this lecture we'll create a password generator.
How to do things in optimzed way is something we'll focus more on.
A project is advance or beginner level not based on it's name rather on the level of features u have added in it and your approach to that project.


# useCallback hook 
It lets u to batch changes in the cache and update the UI to the correct final stage. Read docs for more info. syntax looks somewhat similar to useEffect hooks. 
A useCallback takes first argument as fxn and second argument as an array which in our case has all the state variables but strangely we didn't provide password state variable rather we provided it's setPassword fxn.
With useCallback we have also used the concept of memoization, so the fxn will be saved in memory, but with useCallback the fxn is cached and is reused across all re-render. 
For more insight refer to CWR9-10 

# Math.floor, Math.random
these fxns are used for generating random numbers. 


# fire callback
  onChange={() => numberAllowed(prev => !prev)}
  This is how we can fire a callback and at the same time get access to the prev value. 

# useCallback Dependency Rule:
You only include variables that are used inside the callback AND could change over time.
for this reason we have [length, numberAllowed, charAllowed, setPassword] as the dependecy array, cuz we haven't used password anywhere in the useCallback rather we used setPassword. 

# Why use both useEffect and useCallback
 if useEffect is what calls the passwordGenerator function on state change then why not just use useEffect and just do it away with useCallback ???
 for ans refer to CWR9-10

 42:00
 Don't compare useEffect with useCallback, in useCallback it's about optimization of that process that will run which is geneeratePassword fxn, whereas useEffect is about running the geneeratePassword fxn when any of the dependcies change. 
 In useCallback if we pass password as one of the dependencies it will create an infinte loop, whereas Passing setPassword is optional but he passed it for optimization. Cuz useCallback caches the result of the dependencies and whenever that changes again it compares the change and then decides to re-render or not. 

we have even put the copyToClipboard fxn in useCallback to optimize it but we should know when to do it and when not to. 

 # useRef hook
 used to have reference of a vlaue. 
 The below two lines are used for better UI feel to the user. 
 passwordRef.current?.select(); // will mark the copied text as light blue.
 passwordRef.current?.setSelectionRange(0, 100); // will help u define the range of selection. 


# window object
 react is just a library of js and entire react code gets converted to js, html, css, eventually, so cuz of that we do have access to window object. whereas in nextjs server side rendering takes place and server doesn't have a window object so we can't use window in nextjs. 