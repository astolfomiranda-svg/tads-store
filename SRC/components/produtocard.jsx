function ProdutoCard({ title, price, thumbnail }) {
  return (
    <div className="produto-card">
      <img src={thumbnail} alt={title} className="produto-imagem" />
      <h3 className="produto-titulo">{title}</h3>
      <p className="produto-preco">R$ {(price * 5.5).toFixed(2)}</p> {/* Multiplicado por 5.5 para simular em Reais */}
      {price > 100 && <span className="selo-frete">Frete Grátis</span>}
      <button className="botao-comprar">Comprar</button>
    </div>
  );
}

export default ProdutoCard;