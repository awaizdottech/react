import React, { useEffect, useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  // const [theme,setTheme]=useState('light')
  // const switchMode=()=>setTheme(t=>!t)
  // if we  dont know the function definition we can redefine it at the time of usage like we have defined switchMode here
  // useEffect(()=>{
  //   document.querySelector('html').classList.remove('light','dark')
  //   document.querySelector('html').classList.add(theme)
  // },[]) this works for tailwind with an additional config in tailwind config file

  return (
    <>
      {/* <ThemeProvider value={{theme,switchMode}}> */}
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
