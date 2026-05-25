import FaleConosco from "@/src/components/FaleConosco";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import dados from "@/src/data.json";
import MotionDiv from "@/src/components/MotionDiv";
import Image from "next/image";

type ConteudoPagina = {
  titulo: string;
  p: string;
  imagem: string;
  img?: string[];
};

type Sobre = {
  textos: {
    id: string;
    titulo: string;
    texto: string[];
  }[];
};

type Dados = Record<string, ConteudoPagina | Sobre>;

export default async function Pagina({ params }: { params: Promise<{ pagina: string }>; }) {

  const { pagina } = await params;
  const conteudo = (dados as Dados)[pagina] as ConteudoPagina;

  if (!conteudo) {
    return (
      <div className="text-black p-10">
        Página não encontrada
      </div>
    );
  }

  return (
    <div className="bg-[#270F0E] h-1000">
      <Navbar />

      <MotionDiv className="md:relative md:w-220 md:h-91.5  md:mx-auto">
        <Image
          src={conteudo.imagem}
          alt={conteudo.titulo}
          fill
          className="object-cover md:mx-auto md:rounded-lg"
        />
      </MotionDiv>

      <MotionDiv className="md:w-220 md:mx-auto md:space-y-10 md:mt-22.5">
        <h1 className="text-[#BD4217] md:text-[50px] font-bold">
          {conteudo.titulo}
        </h1>

        <p className="text-[#BD4217] text-[14px] md:text-[20px]">
          {conteudo.p}
        </p>
      </MotionDiv>
      <FaleConosco />
      <Footer />
    </div>
  );
}