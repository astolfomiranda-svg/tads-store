import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(usuario, senha)) {
      navigate("/minha-conta"); // Redireciona se der certo
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Acessar Conta</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <label>Usuário:</label><br />
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} /><br /><br />
        <label>Senha:</label><br />
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} /><br /><br />
        <button type="submit" className="botao">Entrar</button>
      </form>
    </div>
  );
}