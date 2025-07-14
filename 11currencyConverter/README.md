# custom hooks
the hooks are nothing but functions, [counter, setCounter] = useState(0), here the useState is just a fxn that returns a varialbe and a reference to a fxn. 
so we are gonna crate our own custom hooks. Usually we keep the hooks file name with .js or .ts extension only if they return a jsx or tsx should we have .jsx or .tsx.

# useEffect
we also use it to run a logic when a component mounts/unmounts

# timestamp: 22: 16, part 1 is completed. 


# How to make our component reusable

# We must provide keys when iterating through a list in jsx.
Though what the key should be is a topic in itself cuz using index as key can also have it's downsides. 


# How do we import components in big projects.
crate an index.js in components folder and do import of all the components there, the at the bottom write export { all imported component's name }
Now if we wanna import it in say app.jsx
we write import {c1, c2, c3} from "./components" don't even have to write /index.js at the end, cuz index.js is called by default. 

# useId hook
we use it to generate unique id, here in this project we used it for generating unique id for input so that we can attach a label onto it.
Note: docs say to not use useId for generating keys.

# assignments
1. to divide the ui in two components left and right and put an image on left and coverter on right (like firebase).
2. put the default value of To to inr. (done)