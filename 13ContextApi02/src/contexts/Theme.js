import { createContext, useContext } from "react";

// Creating the theme. 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

// This will be the wrapper
export const ThemeProvider = ThemeContext.Provider;

//This would be used to acces the context variable, rather than using two imports i.e. useContext and ThemeContext and then using them. 
export default function useTheme() {
    return useContext(ThemeContext);
}

/**
 * This code is similar to what we wrote in two files i.e. UserContext + UserContextProvider. This is what's used in production grade, where we write two files logic in one and just use import all of it from this file only.
 * 
 * Here we are passing default values in createContext which would provide the inital values when the context is created for the first time, this is jsut another way of creating context ( similar to how we have two ways of creating routes in react.)
 * 
 * We can also see that we can provide some varialbes and our own fxns and not just setState fxns that we did in UserContextProvider in the first half of this vide.
 * 
 */