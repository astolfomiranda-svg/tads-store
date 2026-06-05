import Layout from "./components/Layout";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Vitrine from "./components/Vitrine";

function App() {
  return (
    <Layout>
      <Cabecalho />
      <Vitrine />
      <Rodape />
    </Layout>
  );
}

export default App;