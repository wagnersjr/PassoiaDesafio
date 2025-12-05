import bannerRosa from "../../assets/bannerosa.png";
import "./novidades.scss";

 function Novidades() {
  return (
    <section>
        <div>
      <h2 className="novidades">NOVIDADES PARA VOCÊ</h2>
      </div>

      <div>
        <img className="bannerosa" src={bannerRosa} alt="Banner de novidades" />
      </div>
    </section>
  );
}

export default Novidades