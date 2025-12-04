// hooks são funçoes especiais do react;
//useState controla os estados de algo na interface
import { useState } from "react";
import "./lancamentos.scss"

//IMPORT DAS IMAGENS:
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import rose from "../../assets/base.png";

import batom1 from "../../assets/Ellipse 5.png";
import batom2 from "../../assets/Ellipse 4.png";
import batom3 from "../../assets/Ellipse 7.png";
import batom4 from "../../assets/Ellipse 6.png";

import colecao from "../../assets/batom1.png";
import colecao1 from "../../assets/batom2.png";
import colecao2 from "../../assets/batom3.png";
import estrelas from "../../assets/star.png";

function Lancamentos() {
  //estado inicial
  //cor a variavel inicial, setCor a função atualizadora
  const [cor, setCor] = useState(vermelho);

  return (
    <section>
      <h2>APROVEITE OS LANÇAMENTOS E TESTE OS PRODUTOS</h2>
      <div className="lancamentos">
        <div className="container-lancamentos">
          <figure>
            <img src={colecao} alt="batons" />
            <img src={colecao1} alt="battons nudes" />
            <img src={colecao2} alt="batoes mates" />
          </figure>
        </div>

        <img className="modelo" src={cor} alt="Modelo usando o batom" />

        <section className="logica">
          <img src={estrelas} alt="estrelas" />
          <h4>Matte Premium</h4>
          <p>Cores disponível</p>
          <div className="btn">
            <button
              onClick={() => {
                setCor(vermelho);
              }}
            >
              <img src={batom1} alt="vermelho" />
            </button>
            <button onClick={() => setCor(azul)}>
              <img src={batom2} alt="rosa" />
            </button>
            <button onClick={() => setCor(marrom)}>
              <img src={batom4} alt="marrom" />
            </button>
            <button
              onClick={() => {
                setCor(rose);
              }}
            >
              <img src={batom3} alt="vermelho" />
            </button>
          </div>
          <h4>Descrição</h4>
          <p>
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Lancamentos;
