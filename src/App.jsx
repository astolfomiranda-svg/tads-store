import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/layout";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import Vitrine from "./components/vitrine";

// Importação das novas telas
import DetalheProduto from "./pages/DetalheProduto";
import Login from "./pages/Login";
import MinhaConta from "./pages/MinhaConta";
import NaoEncontrada from "./pages/NaoEncontrada";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Cabecalho />
          
          <Routes>
            {/* Rota principal da Vitrine */}
            <Route path="/" element={<Vitrine />} />
            
            {/* Rota dinâmica de detalhes */}
            <Route path="/produto/:id" element={<DetalheProduto />} />
            
            {/* Rota de login e área do cliente protegida */}
            <Route path="/login" element={<Login />} />
            <Route path="/minha-conta" element={<MinhaConta />} />
            
            {/* Rota de Erro 404 */}
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>

          <Rodape />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;