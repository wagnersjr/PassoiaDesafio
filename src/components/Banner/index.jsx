import "./banner.scss";
import banner from "../../assets/bannerPrincipal.png"



function Banner() {
  return (
    <section className="banner">
      <img src={banner} alt="Banner principal" />
    </section>
  );
}

export default Banner