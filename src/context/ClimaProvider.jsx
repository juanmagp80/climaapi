import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  console.log(import.meta.env.VITE_API_KEY);
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [noResultados, setNoResultados] = useState("");

  const consultarClima = async (datos) => {
    setCargando(true);
    setNoResultados(false);
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}}&limit=1&appid=${appId}`;
      const { data } = await axios(url);
      console.log(data);
      const { lat, lon } = data[0];
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&lang=sp`;
      const { data: clima } = await axios(urlClima);

      const { main, description } = clima.weather[0];
      console.log(main, description);

      setTimeout(() => {
        setResultado(clima);
        setCargando(false);
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        setNoResultados("No se encontraron resultados");
      }, 3000);
    } finally {
      setTimeout(() => {
        setCargando(false);
      }, 3000);
    }
  }; //

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ClimaContext.Provider
      value={{
        ciudad,
        setCiudad,
        pais,
        setPais,
        busqueda,
        setBusqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultados,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export default ClimaContext;
export { ClimaProvider };
