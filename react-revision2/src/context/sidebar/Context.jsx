import React,{ createContext, useState } from "react";


// create the context
const AppContext = createContext();
// create the provider
const AppProvider = ({ children }) =>{
    const [show, setShow] = useState(false);
    return <AppContext.Provider value={{
        show,
        setShow,
    }}>
        {children}
    </AppContext.Provider>
}

export {AppProvider,AppContext}