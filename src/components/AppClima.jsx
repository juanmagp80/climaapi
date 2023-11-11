import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";
import Header from "./Header";

const AppClima = () => {
  const { resultado, cargando, noResultados } = useClima();
  return (
    <div>
      <>
        <main className="dos-columnas">
          <Formulario />
          {cargando ? (
            <Spinner />
          ) : resultado?.name ? (
            <Resultado />
          ) : noResultados ? (
            <p>{noResultados}</p>
          ) : (
            <p className="ingrese">
              Ingrese una ciudad y país para consultar el clima
            </p>
          )}
        </main>
      </>
    </div>
  );
};

export default AppClima;
