import "./produtos.scss"

function Produtos() {
    return (
      <section className="produtos">
        <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
        <figure>
          <img src="./gloss.png" alt="Imagem de produto" />
          <img src="make.png" alt="Imagem de produto" />
          <img src="./pincel.png" alt="Imagem de produto" />
          <img src="sombra.png" alt="Imagem de produto" />
        </figure>
      </section>
    );
}

export default Produtos