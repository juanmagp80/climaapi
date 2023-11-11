import useClima from "../hooks/useClima";
import { useState } from "react";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarClima(busqueda);
    // Consultar la API
  };

  return (
    <div className="contenedor">
      {alerta && <div className="alerta">{alerta}</div>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País:</label>
          <select name="pais" id="pais" value={pais} onChange={datosBusqueda}>
            <option value="">-- Seleccione un país --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input type="submit" value="Consultar Clima" />
      </form>
      {consultarClima && <p></p>}
    </div>
  );
};

export default Formulario;
