import React from 'react';

export default AppContext= React.createContext();

//wrap your appliaction (or main page) with App Provider , to recieve values of provider 
export const AppProvider = ({children})=>{
     
    const [counter, setCounter] = React.useState(200);
    return(
        <AppContext.Provider value={{counter, setCounter}} >
         {children}
        </AppContext.Provider>
    );

}
                      