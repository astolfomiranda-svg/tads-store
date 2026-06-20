import { useNavigate } from "react-router-dom";

export default function ProdutoCard({ id, title, price, thumbnail }) {
  const navigate = useNavigate();

  return (
    <div className="produto-card">
      <img src={thumbnail} alt={title} className="produto-imagem" />
      <h3 className="produto-titulo">{title}</h3>
      <p className="produto-preco">R$ {(price * 5.5).toFixed(2)}</p>
      {price > 100 && <span className="selo-frete">Frete Grátis</span>}
      {/* O botão agora joga o ID do produto para a URL */}
      <button onClick={() => navigate(`/produto/${id}`)} className="botao-comprar">Comprar</button>
    </div>
  );
}