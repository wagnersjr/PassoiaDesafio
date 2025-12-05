import "./looks.scss";

import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

 function Looks() {
  return (
    <section className="sectionLooks">

      <h2 className="h2Looks">LOOKS E DICAS DE MAQUIAGEM</h2>

      <section className="sectionBanners">

        <div className="BannerDiv">
          <img src={labios} alt="" />
        </div>

        <div className="BannerDiv">
          <img src={olhos} alt="" />
        </div>

        <div className="BannerDiv">
          <img src={rosto} alt="" />
        </div>

        <div className="BannerDiv">
          <img src={tendencia} alt="" />
        </div>

      </section>
    </section>
  );
}
export default Looks;