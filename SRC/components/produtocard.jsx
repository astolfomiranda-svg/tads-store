import Botao from "./Botao";
import Selo from "./Selo";

function ProdutoCard({ produto }) {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />

      <h3>{produto.nome}</h3>

      <p>{produto.preco}</p>

      {produto.freteGratis && (
        <Selo texto="Frete Grátis" />
      )}

      <Botao texto="Comprar" />
    </div>
  );
}

export default ProdutoCard;