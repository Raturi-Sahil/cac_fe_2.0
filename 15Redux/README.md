
# Redux all knowing.
  check this out for connecting the dots. 
# Redux
Just like how we use React-dom or React-native library with core React, similar to that we have react-redux which works with redux core library to help in state management, react-redux sort of provides a way ( like a bridge ) to use redux in react app.
 
# flux
So facebook developed flux to cater for state management related issues and to provide a global variables like context api does. flux had data flow concept where accessing the global varialbes and updating them followed a structured path. 

# In 2015
In a conference redux was introduced and gave certain principles for how should states should be managed. 
concepts like you should never modify your state and changes should only be made via fxns ( called reducers ).

But the issue with redux was that it needed a lot of time for initial setup, i mean a lot of boiler plate. So for this react-toolkit came into the picture, it provided a lot of abstraction and streamlined the workflow and initial setup.

# install redux-toolkit and react-redux both.

# Meats and potatos
Store: we are gonna create stores( user store, auth store) that would be like global variables ( that we made in the context api).
reducers: This would provide u fxns to modfiy the stores ( slicers ).
The above two are from redux and the below two are from react.
useSelector:
useDispatch: will dispatch some event. A dispatcher adds/updates value in a store by using a reducer.

# How to create a store
1) components/app/store.js (file structure can be opinionated), import configureStore
2) commponents/features/todo/todoSlice.js, import createSlice and nanoid, where createSlice helps u in creating slices , and nanoid is used to provide u unique keys.  Create initial state, it can be an array or object total up to u. 

# summary
1. first create a store, every app is gonna have 1 store.
2. These stores require reducers to be aware of the data flow. so gotta create reducers.
3. so create slice ( as per the docs your features are called slices.)
4. what does it mean when we say in react-redux state is preserved but not in context api? check out CWR14
5. Gotta do two exports at the bottom, one is for all the reducers and also export todoSlice.reducer for store.js
6. use useDispatch for dispatching a method when an event/action occurs, and use useSelector for extracting values from the store.
