// aqui importamos os arquivos
import Header from "./components/Header";
import Banner from "./components/Banner"
import Lancamentos from "./components/Lancamentos";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return (
    <>
      <Header />
      <Banner imagem="./banner.png" alt="Banner inicial" />
      <Produtos />
      <Lancamentos />
      <Banner imagem="./banner2.png" alt="Banner inicial" />
      <Footer/>
    </>
  );
}
export default App