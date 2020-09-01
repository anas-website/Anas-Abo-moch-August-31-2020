import React, { createContext, useState } from 'react'
export const ContextStore = createContext()
export  function Store(props) {

const [favorits, setfavorits] = useState([{countryName:'haifa'},{countryName:'Tel Aviv'}])
const [chosenCountry, setchosenCountry] = useState('Tel Aviv')

    return (
     <ContextStore.Provider value={{favorits:favorits,setfavorits:setfavorits,chosenCountry:chosenCountry,setchosenCountry:setchosenCountry}}>
    
 {props.children}
        
     </ContextStore.Provider>
    )
}
