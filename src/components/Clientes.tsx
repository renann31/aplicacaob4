import Image from "next/image";
import { motion } from "motion/react"

const Clientes = () => {
    const contentCards = [
        {
            "imagem": "/assets/cardHome1.png",
            "titulo": "Festival Timbre",
            "p": "Com um público de aproximadamente 10.000 pessoas, em 2025 será a 5ª edição que Daniella assume a cenografia e as experiências de marketing do maior festival de música do Triângulo Mineiro, contribuindo para sua identidade visual e sensorial."
        },
        {
            "imagem": "/assets/cardHome2.png",
            "titulo": "Camaru 2023",
            "p": "Assinou a cenografia do stand do Grupo Paranaíba no Camaru 2023, criando um espaço temático inspirado no reality A Fazenda 15."
        },
        {
            "imagem": "/assets/cardHome3.png",
            "titulo": "Camaru 2024",
            "p": "Liderou 4 ativações ao longo do evento, incluindo a maior ação de marca da edição: a Roda-Gigante da Algar, reconhecida como a mais memorável e impactante experiência do festival."
        },
    ]

    const clientes = [
        {
            "cliente": "/assets/c1.png",
        },
        {
            "cliente": "/assets/c2.png",
        },
        {
            "cliente": "/assets/c3.png",
        },
        {
            "cliente": "/assets/c4.png",
        },
        {
            "cliente": "/assets/c5.png",
        },
        {
            "cliente": "/assets/c6.png",
        },
        {
            "cliente": "/assets/c7.png",
        },
        {
            "cliente": "/assets/c8.png",
        },
        {
            "cliente": "/assets/c9.png",
        },
        {
            "cliente": "/assets/c10.png",
        },
    ]

    const animation = {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "easeOut" as const },
        viewport: { once: false, amount: 0.2 }
    };

    return (
        <>
            <motion.div
                initial={animation.initial}
                whileInView={animation.whileInView}
                transition={animation.transition}
                viewport={animation.viewport}
                className="md:flex md:w-220 xl:w-280 md:gap-4 mx-auto">
                {contentCards.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className="md:flex md:flex-col md:flex-1 md:gap-2">
                            <Image
                                src={card.imagem}
                                alt="imagem card"
                                width={300}
                                height={250}
                                className="object-contain rounded-lg md:mb-7"
                            />
                            <h1 className="text-[#BD4217] text-[18px] font-bold">{card.titulo}</h1>
                            <p className="text-[#E46824] text-[12px] md:pr-2">{card.p}</p>
                        </div>
                    )
                })}
            </motion.div>
            
            <motion.div
                initial={animation.initial}
                whileInView={animation.whileInView}
                transition={animation.transition}
                viewport={animation.viewport}>

                <div className="w-full md:flex md:justify-center">
                    <h1 className="text-[#E46824] md:text-[24px] md: md:mt-30">Nossos Clientes</h1>
                </div>

                <div className="md:max-h-26 md:flex md:overflow-x-auto md:gap-8.5 md:ml-34.25">
                    {clientes.map((c, i) => {
                        return (
                            <Image
                                src={c.cliente}
                                alt="cliente"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        )
                    })}
                </div>
            </motion.div>

        </>
    );
}

export default Clientes