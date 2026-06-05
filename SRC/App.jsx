import Cabecalho from "./components/cabecalho";
import Layout from "./components/layout";
import Vitrine from "./components/vitrine";
import Rodape from "./components/rodape";

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