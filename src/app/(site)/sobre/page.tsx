import Image from "next/image";
import dados from "@/src/dataSobreEClientes.json";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import FaleConosco from "@/src/components/FaleConosco";
import MotionDiv from "@/src/components/MotionDiv";

export default async function SobreNos() {
    const conteudo = dados["sobre"];
    const textos = conteudo.textos;

    return (
        <div className="bg-[#270F0E] ">
            <Navbar />

            <div className="flex flex-col w-full px-5 sm:px-8 md:w-[90%] md:ml-30 gap-12 md:gap-20">

                {/* TEXTOS */}
                <div className="w-full max-w-[320px] md:max-w-300 mx-auto text-white space-y-20 md:space-y-50 md:mt-20">

                    {textos.map((t) => (
                        <MotionDiv key={t.id} className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center gap-8 md:gap-12">

                            {/* TEXTO */}
                            <div className="text-[#BD4217] space-y-4 md:max-w-200 order-2 md:order-1">
                                <h1 className="font-serif font-bold text-[24px] md:text-[40px]">
                                    {t.titulo}
                                </h1>

                                {t.texto.map((paragrafo, i) => (
                                    <p key={i} className="font-sans font-light text-[14px] md:text-[18px]">
                                        {paragrafo}
                                    </p>
                                ))}
                            </div>

                            {/* IMAGEM */}
                            <div className="flex justify-center order-1 md:order-2">
                                {t.id === "1" && (
                                    <Image 
                                        src="/assets/logoSobre.svg"
                                        alt="logo b4" 
                                        width={160} 
                                        height={40} 
                                        className="md:w-50" />
                                )}

                                {t.id === "3" && (
                                    <Image 
                                        src="/assets/logoGDB.svg"
                                        alt="logo GDB" 
                                        width={160} 
                                        height={40} 
                                        className="md:w-50" />
                                )}
                            </div>
                        </MotionDiv>
                    ))}
                </div>
                <div className="md:-translate-x-40">
                </div>
            </div>
            <FaleConosco />
            <Footer />
        </div>
    )
};