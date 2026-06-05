import produtos from "../data/produtos";
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
  return (
    <section className="vitrine">
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          produto={produto}
        />
      ))}
    </section>
  );
}

export default Vitrine;