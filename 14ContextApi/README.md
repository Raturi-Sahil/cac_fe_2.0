# Goal
The goal of this entire react series is to understand the business logic and not just to make ui ( for this there are a lot of videos in the market)

# context creation
In TodoContext.js, you'll get to see that in context object we don't write the definition of a fxnality/fxn, rather we just write the declaration, it's name and what it is (fx i.e.  = () => {}) and it's definition is provided inside app.jsx. This is how we set things up in context api for most projects. 

Context Api isn't for big projects, therefore we use libraries like redux or zustand.

# important fx in js
.map and .forEach for iterating over an array ( not object ). Where map returns a new array with all the elements (i mean length remains the same, though u can update the value as per your logic). But forEach upadates on the spots and modifies the original array as per your logic. 

.filter for deletion and .splice as well.

# 39:46
Context api fxnality stops and we'll start local storage facility. 

# Local storage
It's the local storage of the browser and not of any library. so accesing it and setting it is gonna be the same no matter what library u use. 
Local storage only saves value in string so gotta change in to json during acces and back to string when setting.

In React (e.g., with Next.js), client-side rendering gives access to window, localStorage, etc., since it runs in the browser. But during server-side rendering (like in Next.js pages or getServerSideProps), these aren’t available because the code runs on the server. Always use useEffect for browser-only code to ensure it runs after the component mounts on the client.

# Learning
use console.log() to debug, but also know that u can't write it anywhere u want cuz it might throw errors if used at wrong places. 
for map and other fxns if they return something then either use () with implicit return else if u are using {} then make sure u return inside the logic. 