import "./footer.scss";

import instagram from "../../assets/socials.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"
import twitter from "../../assets/twitter.png"
import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import pix from "../../assets/pix.png"
import boleto from "../../assets/boleto.png"

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-atendimento">
        <h4>Atendimento</h4>
        <ul>
          <li>Fale Conosco</li>
          <li>Perguntas Frequentes</li>
          <li>Meus Pedidos</li>
          <li>Nossas Lojas</li>
        </ul>
      </nav>

      <div className="footer-pagamentos">
        <h4>Formas de Pagamento</h4>
        <figure className="icons-pagamento">
          <img src={mastercard} alt="Cartão Mastercard" />
          <img src={visa} alt="Cartão Visa" />
          <img src={pix} alt="Pagamento via Pix" />
          <img src={boleto} alt="Boleto Bancário" />
        </figure>
      </div>

      <div className="footer-redes">
        <h4>Siga-nos nas Redes</h4>
        <figure className="social-icons">
          <img src={instagram}alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={youtube} alt="YouTube" />
          <img src={twitter} alt="Twitter" />
        </figure>
      </div>
    </footer>
  );
}

export default Footer;
