"use client" /* TEMPORARIO */
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Image from "next/image";
import ServicosHome from "../components/ServicosHome";
import Clientes from "../components/Clientes";

export default function Home() {
  

  return (
    <div className="bg-[#270F0E] h-1000">
      <Navbar />
      <Header />
      <ServicosHome />
      <Clientes />
      

    </div>

  );
}


