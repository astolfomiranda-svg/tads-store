import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Cabecalho() {
  const { logado, logout } = useContext(AuthContext);

  return (
    <header className="cabecalho" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 40px" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}><h1>TADS Tech Store</h1></Link>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>Loja</Link>
        <Link to="/minha-conta" style={{ color: "white", marginRight: "20px", textDecoration: "none" }}>Minha Conta</Link>
        {logado ? (
          <button onClick={logout} style={{ background: "transparent", color: "white", border: "1px solid white", cursor: "pointer", padding: "5px 10px" }}>Sair</button>
        ) : (
          <Link to="/login" style={{ color: "white", border: "1px solid white", padding: "5px 10px", textDecoration: "none" }}>Entrar</Link>
        )}
      </nav>
    </header>
  );
}