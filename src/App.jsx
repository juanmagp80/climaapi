import AppClima from "./components/AppClima";
import Header from "./components/Header";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
  return (
    <ClimaProvider>
      <header className="App-header">
        <h1>Consultor del Clima</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  );
}

export default App;
