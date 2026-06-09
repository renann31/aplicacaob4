import FaleConosco from "@/src/components/FaleConosco";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import dados from "@/src/dataProjetos.json";
import MotionDiv from "@/src/components/MotionDiv";
import Image from "next/image";
import { CarrosselCP, CarrosselGH } from "@/src/components/Carrossel";

type ConteudoPagina = {
  titulo: string;
  p: string;
  imagem: string;
  img?: string[];
  estilo: string
};

type Dados = Record<string, ConteudoPagina>;

export default async function Pagina({ params }: { params: Promise<{ pagina: string }>; }) {

  const { pagina } = await params;
  const conteudo = (dados as  Dados)[pagina] as ConteudoPagina;

  if (!conteudo) {
    return (
      <div className="text-black p-10">
        Página não encontrada
      </div>
    );
  }

  return (
    <div className="bg-[#270F0E]">
      <Navbar />
      {/* imagem */}
      <MotionDiv className="w-90 mx-auto h-60 relative md:mb-40 md:w-220 md:h-91.5 2xl:w-280 2xl:h-120">
        <Image
          src={conteudo.imagem}
          alt={conteudo.titulo}
          fill
          className={`object-contain md:object-cover md:mx-auto md:rounded-lg`}
        />
      </MotionDiv>
      {/* texto */}
      <MotionDiv className="w-72 md:w-220 mx-auto md:space-y-10 md:mt-22.5 md:my-40 2xl:w-280">
        <h1 className="text-[#BD4217] text-[40px] md:text-[50px] font-bold my-10 md:my-0">
          {conteudo.titulo}
        </h1>

        <p className="text-[#BD4217] text-[20px]">
          {conteudo.p}
        </p>
      </MotionDiv>

      {pagina === "grand-hyatt" && (
        <MotionDiv className="md:my-10">
          <CarrosselGH />
        </MotionDiv>
      )}

      {pagina === "copacabana-palace" && (
        <MotionDiv className="md:my-10">
          <CarrosselCP />
        </MotionDiv>
      )}

      <FaleConosco />
      <Footer />
    </div>
  );
}