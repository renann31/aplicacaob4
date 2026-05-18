import Link from "next/link";
import { motion } from "motion/react"
import Image from "next/image";

const ServicosHome = () => {

    const animation = {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" as const },
        viewport: { once: false, amount: 0.2 }
    };

    return (
        <>
            <motion.div
                initial={animation.initial}
                whileInView={animation.whileInView}
                transition={animation.transition}
                viewport={animation.viewport}
                className="flex flex-col-reverse mx-auto items-center mb-20 w-72 md:w-220 md:flex-row md:mt-40 md:max-h-200 md:gap-10">
                {/* TEXTO */}
                <div className="flex flex-col gap-3.25 relative md:gap-6 md:max-w-110 md:py-13.5">

                    <h2 className="text-[#BD4217] md:text-[26px] font-bold text-left font-serif">
                        Metropolitano - Grand Hyatt
                    </h2>

                    <p className="text-[10px] md:text-[12px] text-[#E46824] text-left">
                        No Grand Hyatt, a B4 desenvolveu a cenografia da área de montagem dos abadás, pensada como parte da experiência do final de semana.
                    </p>

                    <button className="md:w-20 md:h-8 bg-[#BD4217] flex md:py-1.5 md:px-1 rounded-lg">
                        <Link href={`/* rota */`} className="text-[#270F0E] tracking-widest text-[6px] md:text-[12px]">
                            Saiba mais
                        </Link>
                    </button>
                </div>

                {/* IMAGEM */}
                <Image
                    src="/assets/grandHyatt.png"
                    alt="Imagem do serviço"
                    width={500}
                    height={237}
                    className="object-cover md:object-contain rounded-lg"
                />

            </motion.div>

    {/* card 2 */}
            <motion.div
                initial={animation.initial}
                whileInView={animation.whileInView}
                transition={animation.transition}
                viewport={animation.viewport}
                className="flex flex-col-reverse mx-auto items-center mb-20 w-72 md:w-220 md:flex-row md:mt-20 md:max-h-200 md:gap-10">

                {/* IMAGEM */}
                <Image
                    src="/assets/copacabanaPalace.png"
                    alt="Imagem do serviço"
                    width={500}
                    height={237}
                    className="object-cover md:object-contain rounded-lg"
                />

                {/* TEXTO */}
                <div className="flex flex-col gap-3.25 relative md:gap-6 md:max-w-110 md:py-13.5">

                    <h2 className="text-[#BD4217] md:text-[26px] font-bold text-left font-serif">
                        Metropolitano - Copacabana Palace
                    </h2>

                    <p className="text-[10px] md:text-[12px] text-[#E46824] text-left">
                        No Copacabana Palace, a B4 criou a cenografia do evento noturno de comemoração, transformando o espaço em um percurso de celebração, reconhecimento e memória
                    </p>

                    <button className="md:w-20 md:h-8 bg-[#BD4217] flex md:py-1.5 md:px-1 rounded-lg">
                        <Link href={`/* rota */`} className="text-[#270F0E] tracking-widest text-[6px] md:text-[12px]">
                            Saiba mais
                        </Link>
                    </button>
                </div>

            </motion.div>
        </>
    );
}

export default ServicosHome