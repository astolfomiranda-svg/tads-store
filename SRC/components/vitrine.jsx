import { useState, useEffect } from "react";
import ProdutoCard from "./produtocard";

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

  useEffect(() => {
    // Busca os produtos gerais da API
    fetch("https://dummyjson.com/products")
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Não foi possível carregar os produtos.");
        return resposta.json();
      })
      .then((dados) => {
        // Filtra para pegar apenas categorias de tecnologia que vêm da API
        const apenasTech = dados.products.filter(
          (p) => p.category === "smartphones" || p.category === "laptops" || p.category === "mobile-accessories"
        );
        setProdutos(apenasTech);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  // Lógica de Filtro combinando Busca + Categoria
  const produtosFiltrados = produtos.filter((produto) => {
    const bateBusca = produto.title.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = categoriaSelecionada === "all" || produto.category === categoriaSelecionada;
    return bateBusca && bateCategoria;
  });

  if (carregando) return <div className="aviso-tela">Carregando produtos de tecnologia...</div>;
  if (erro) return <div className="aviso-tela erro">Erro: {erro}</div>;

  return (
    <div className="vitrine-container">
      <div className="filtros-bar">
        <input
          type="text"
          placeholder="Busque por celulares, notebooks..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="input-busca"
        />

        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="select-categoria"
        >
          <option value="all">Todas as Tecnologias</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Notebooks</option>
        </select>
      </div>

      <div className="produtos-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              title={produto.title}
              price={produto.price}
              thumbnail={produto.thumbnail}
              category={produto.category}
            />
          ))
        ) : (
          <p className="sem-resultados">Nenhum produto de tecnologia encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Vitrine;