import React, { useContext, useState, createContext } from "react";
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();
// const ThemeContext = createContext({
//   theme: "light",
//   switchMode: () => {},
// });
// next we can create provider like const ThemeProvider = ThemeContext.Provider

// we can also export the above contexts then use them with useContext hook wherever we need instead of makiing separate functions for using them like the ones that exists below.

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((theme) => !theme);
  }

  return (
    // in this case instead of two context we can also use one by giving value={{darkTheme,toggleTheme}} and then accordingly doing pther stuff
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
