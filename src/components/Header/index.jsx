import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav-menu">
        <a href="#">LOOKS</a>
        <a href="#">LANÇAMENTOS</a>
        <a href="#">NOVIDADES</a>
      </nav>
    </header>
  );
}
export default Header