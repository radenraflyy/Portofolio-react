import {createContext, useContext, useState, useEffect} from 'react'
const DarkModeContext = createContext(null)

const DarkMode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true"
  );

  useEffect(() => {
    if (darkMode == true) {
      document.body.classList.add("dark")
    }else{
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  const state = {
    darkMode, setDarkMode
  }

  return(
  <DarkModeContext.Provider value={state} >
    {children}
  </DarkModeContext.Provider>
  )
}


export const useGlobalContext = () => {
  const context = useContext(DarkModeContext)
  if (context === undefined) {
    throw new Error(`useDarkMode must be use within a Global Context`)
  }else{
    return context
  }
}


export default DarkMode