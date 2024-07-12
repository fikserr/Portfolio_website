import { createContext, useState } from "react"
import { eng, uz } from "../language"

export const Context = createContext()

function ContextProvider({children}) {
  const [flag,setFlag] = useState(true)
  const [lang,setLang] = useState(eng)
  function changeLang(til) {
    til  ? setLang(eng) : setLang(uz)
    setFlag(!flag)
  }
  

  return (
    <Context.Provider value={{flag, lang, changeLang,}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider