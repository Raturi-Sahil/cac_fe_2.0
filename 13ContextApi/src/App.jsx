import UserContextProvider from "./context/UserContextProvider"
import { Login, Profile } from "./components/index.js"
function App() {
  
  {/**
    🧠 1. What is UserContextProvider?
          It’s a custom component that provides a shared state (user, setUser) to everything inside it via React Context.

    🧒 2. What is children?
          In React, children is a special prop.
          It refers to whatever you wrap inside a component.

    📦 3. Why we use {children} inside the provider?
          Because we want to wrap some UI (our app) and inject context into it. The {children} allows this component to pass the context to everything it wraps.

    for more info refer to CWR13
  */}


  return (
    <UserContextProvider>
      <h1>React with context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App


/**
 * some people also like to do it this way, but then in this case they would have to provide th pros here as well and also gotta define them here, this i what i think. 
 *  <UserContext.Provider value={}>
     <h1>Sup everybody</h1>
    </UserContext.Provider>
 */