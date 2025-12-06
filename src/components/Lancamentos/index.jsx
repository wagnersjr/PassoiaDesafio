import { useState } from "react";

import "./lancamentos.scss";

import kit1 from "../../assets/kit1.png";
import kit2 from "../../assets/kit2.png";
import kit3 from "../../assets/kit3.png";

import fotoAzul from "../../assets/azul.png";
import fotoVermelho from "../../assets/vermelho.png";
import fotoMarrom from "../../assets/marrom.png";
import fotoBase from "../../assets/base.png";

function Lancamentos() {

    const [cor, setCor] = useState(fotoAzul);

  return (
    <section className="lancamentos">
      <h2 className="tituloLancamentos">APROVEITE OS LANÇAMENTOS</h2>

      <div className="conteudoLancamentos">
        <div className="miniaturas">
          <img src={kit1} alt="batons" />
          <img src={kit2} alt="batons" />
          <img src={kit3} alt="batons" />
        </div>

        <div className="imagemPrincipal">
          <img src={cor} alt="Modelo" />
        </div>

        <div className="cardLancamento">
          <div className="avaliacao">⭐⭐⭐⭐⭐</div>

          <h3 className="tituloProduto">Matte Premium</h3>

          <p className="subtitulo">Cores disponíveis</p>

          <div className="cores">
            <button onClick={() => setCor(fotoAzul)} className="cor cor1"></button>
            <button onClick={() => setCor(fotoVermelho)} className="cor cor2"></button>
            <button onClick={() => setCor(fotoMarrom)} className="cor cor3"></button>
            <button onClick={() => setCor(fotoBase)} className="cor cor4"></button>
          </div>

          <h4 className="descricaoTitulo">Descrição</h4>
          <p className="descricaoTexto">
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e proteger os lábios contra ressecamento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Lancamentos;
