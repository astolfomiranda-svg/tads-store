import { useState, useEffect } from "react";
import ProdutoCard from "./produtocard";

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  
  // Estados obrigatórios da Etapa 2: Busca e Categoria
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

  useEffect(() => {
    // Buscando 150 itens para alcançar celulares e notebooks da DummyJSON
    fetch("https://dummyjson.com/products?limit=150")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os produtos.");
        }
        return resposta.json();
      })
      .then((dados) => {
        // Filtragem de nicho: só entram no estado os itens de tecnologia!
        const apenasTech = dados.products.filter(
          (p) => p.category === "smartphones" || p.category === "laptops"
        );
        setProdutos(apenasTech);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  // Lógica combinada: busca por texto + filtro do select
  const produtosFiltrados = produtos.filter((produto) => {
    const bateBusca = produto.title.toLowerCase().includes(busca.toLowerCase());
    const bateCategoria = categoriaSelecionada === "all" || produto.category === categoriaSelecionada;
    return bateBusca && bateCategoria;
  });

  // Tratamentos de interface exigidos pelo professor
  if (carregando) return <div className="aviso-tela">Carregando produtos de tecnologia...</div>;
  if (erro) return <div className="aviso-tela erro">Erro: {erro}</div>;

  return (
    <div className="vitrine-container">
      
      {/* BARRA DE FILTROS */}
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
          <option value="laptops">Notebooks (Laptops)</option>
        </select>
      </div>

      {/* GRID DE PRODUTOS */}
      <div className="produtos-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              id={produto.id} /* ← ESSA É A LINHA QUE ADICIONAMOS! */
              title={produto.title}
              price={produto.price}
              thumbnail={produto.thumbnail}
            />
          ))
        ) : (
          <p className="sem-resultados">Nenhum produto encontrado para essa busca.</p>
        )}
      </div>

    </div>
  );
}

export default Vitrine;