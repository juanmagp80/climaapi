
import { useState, createContext } from "react";

export const ClimaContext = createContext();

const ClimaProvider = ({children}) => {
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    
    return (
        <ClimaContext.Provider 
        value={{
            ciudad,
            setCiudad,
            pais,
            setPais
        }}
        >
            {children}
        </ClimaContext.Provider>
    );
    }

export default ClimaProvider;
