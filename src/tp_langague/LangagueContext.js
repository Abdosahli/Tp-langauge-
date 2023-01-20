import { createContext,useState } from "react";

export const Langagues = createContext(); 


  const LangagueContext = ({children}) => {

        const  [lang,setLang] = useState('AR');


    return (
        <div className='app'>
        <Langagues.Provider value={ {lang,setLang}} >

            {children}
        </Langagues.Provider>
        </div>
    );
  }
  
  export default LangagueContext;
  