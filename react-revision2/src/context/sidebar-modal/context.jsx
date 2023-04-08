import React, { createContext, useContext } from 'react';
const AppContext = createContext();
const AppProvider = ({ children }) => {
    return <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>
}

export { AppProvider, AppContext };