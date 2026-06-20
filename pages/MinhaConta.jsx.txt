import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MinhaConta() {
  const { logado, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Guarda de Rotas: Se não estiver logado, chuta para a página de login
  useEffect(() => {
    if (!logado) {
      navigate("/login");
    }
  }, [logado, navigate]);

  if (!logado) return null;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Minha Conta (Área Restrita)</h2>
      <p>Bem-vindo à sua área de cliente da TADS Tech Store!</p>
      <button onClick={logout} style={{ background: "#dc3545" }} className="botao">Sair / Logout</button>
    </div>
  );
}