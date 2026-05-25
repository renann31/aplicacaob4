import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ServicosHome from "../../components/ServicosHome";
import Clientes from "../../components/Clientes";
import FaleConosco from "../../components/FaleConosco";
import Footer from "../../components/Footer";

export default function Home() {
  

  return (
    <div className="bg-[#270F0E] h-1000">
      <Navbar />
      <Header />
      <ServicosHome />
      <Clientes />
      <FaleConosco />
      <Footer />
    </div>

  );
}


