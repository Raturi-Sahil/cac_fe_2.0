# Prop drilling and context Api
When react was introduced devs would just pass the props down the component chain to provide props to a specific component, with this practice even components who don't need those props would have to do the work of drilling them down.
So prevent this context Api came into the picture where we store the props in some global context that can be accessed by the components who need them. 

This problem isn't specific to react other libraries also face somewhat similar problems, but context Api is react specifc thing. 


# State management libraries.
react-redux, it's simpler version is redux-toolkit (RTX). We also have zustand, but redux is the most commonly used one. 

# context folder 
with a .js file ( cuz that will only contain pure js )
steps: first import react and then create a varialbe using .createContext(), then export the variable. 

# provider
after creating the context we also gotta create a provider that we'll use as a wrapper around all the components that wanna use the context variable and no matter how many components or sub-components inside it, all of them will have acces to the context. 
Now we see two methods to create the provider. 

# useContext
It's the hook that we use to access the context either to read and display or to change the context down the components chain.

