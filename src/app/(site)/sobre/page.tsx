import Image from "next/image";
import dados from "@/src/data.json";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import FaleConosco from "@/src/components/FaleConosco";
import MotionDiv from "@/src/components/MotionDiv";

export default async function Sobre() {

    type Sobre = {
        textos: {
            id: string;
            titulo: string;
            texto: string[];
        }[];
    };

    const conteudo = (dados)["sobre"] as Sobre;

    if (!conteudo) {
        return (
            <div className="text-black p-10">
                Página não encontrada
            </div>
        );
    }
    const textos = conteudo.textos;

    return (
        <div className="bg-[#270F0E]">
            <Navbar />

                <div className="text-[#BD4217] md:w-220 md:mx-auto">
                    {textos.map((t) => (
                        <MotionDiv key={t.id} className="md:flex">

                            {/* TEXTO */}
                            <div className="order-2 md:order-1 md:w-154">
                                <h1 className="text-[40px] font-bold">
                                    {t.titulo}
                                </h1>

                                {t.texto.map((paragrafo, i) => (
                                    <p key={i} className="text-[30px]">
                                        {paragrafo}
                                    </p>
                                ))}
                            </div>

                            {/* IMAGEM */}
                            <div className="order-1 md:order-2 ">
                                {t.id === "1" && (
                                    <Image 
                                        src="/assets/logoSobre.svg"
                                        alt="logo b4" 
                                        width={160} 
                                        height={40} 
                                        className="" />
                                )}

                                {t.id === "3" && (
                                    <Image 
                                        src="/assets/logoGDB.svg"
                                        alt="logo GDB" 
                                        width={160} 
                                        height={40} 
                                        className="" />
                                )}
                            </div>
                        </MotionDiv>
                    ))}
                </div>
      <FaleConosco />
      <Footer />
        </div>
    )
};