import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetalheProduto() {
  const { id } = useParams(); // Captura o :id da URL
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(dados => {
        setProduto(dados);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) return <div className="aviso-tela">Carregando detalhes do produto...</div>;

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <Link to="/" style={{ display: "block", marginBottom: "20px", color: "#0d6efd" }}>← Voltar para a Loja</Link>
      <img src={produto.thumbnail} alt={produto.title} style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }} />
      <h2>{produto.title}</h2>
      <p>{produto.description}</p>
      <h3 style={{ color: "#198754" }}>R$ {(produto.price * 5.5).toFixed(2)}</h3>
      <button className="botao">Confirmar Compra</button>
    </div>
  );
}