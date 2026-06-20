import { Link } from "react-router-dom";

export default function NaoEncontrada() {
  return (
    <div style={{ padding: "100px 40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "72px", color: "#dc3545" }}>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>O caminho digitado não existe em nosso sistema.</p>
      <Link to="/" style={{ color: "#0d6efd" }}>Voltar para a Página Inicial</Link>
    </div>
  );
}