import React from 'react'
import UserContext from './UserContext'


{/**
    🧠 1. What is UserContextProvider?
          It’s a custom component that provides a shared state (user, setUser) to everything inside it via React Context.

    🧒 2. What is children?
          In React, children is a special prop.
          It refers to whatever you wrap inside a component.

          In your code: Inside App.jsx

        <UserContextProvider>
          <h1>React with context Api</h1>
          <Login />
          <Profile />
        </UserContextProvider>
        Here, these 3 things:

        <h1>...</h1>
        <Login />
        <Profile />
        are all the children of UserContextProvider.
  */}

function UserContextProvider({children}) {
    const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider