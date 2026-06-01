import Image from "next/image";
import MotionDiv from "./MotionDiv";
import data from "@/src/dataSobreEClientes.json"
import Link from "next/link";

const Clientes = () => {
    const contentCards = [
        {
            "imagem": "/assets/cardHome1.webp",
            "titulo": "Festival Timbre",
            "rota":  "festival-timbre",
            "p": "Com um público de aproximadamente 10.000 pessoas, em 2025 será a 5ª edição que Daniella assume a cenografia e as experiências de marketing do maior festival de música do Triângulo Mineiro, contribuindo para sua identidade visual e sensorial."
        },
        {
            "imagem": "/assets/cardHome2.webp",
            "titulo": "Camaru 2023",
            "rota":  "camaru-2023",
            "p": "Assinou a cenografia do stand do Grupo Paranaíba no Camaru 2023, criando um espaço temático inspirado no reality A Fazenda 15."
        },
        {
            "imagem": "/assets/cardHome3.webp",
            "titulo": "Camaru 2024",
            "rota":  "camaru-2024",
            "p": "Liderou 4 ativações ao longo do evento, incluindo a maior ação de marca da edição: a Roda-Gigante da Algar, reconhecida como a mais memorável e impactante experiência do festival."
        },
    ]

    const clientes = data[""].clientes
    const clientesMobile = data[""].clientesMobile

    return (
        <>
            {/* CARDS */}
            <MotionDiv className="flex gap-3 md:gap-6 overflow-x-auto snap-x snap-mandatory md:w-220 2xl:w-280 md:mx-auto md:overflow-visible ml-10">
                {contentCards.map((card, index) => {
                    return (
                        <Link key={index} href={card.rota} className="flex flex-col gap-2 min-w-60.5 snap-center md:min-w-60 md:flex-1 mr-1  md:mr-0">
                            <div
                                key={index}
                                className=""
                            >
                                <Image
                                    src={card.imagem}
                                    alt="cliente"
                                    width={300}
                                    height={250}
                                    className="object-contain rounded-lg md:mb-7 w-full"
                                />

                                <h1 className="text-[#BD4217] text-[18px] font-bold">
                                    {card.titulo}
                                </h1>

                                <p className="text-[#E46824] text-[14px] md:text-[12px] md:pr-2">
                                    {card.p}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </MotionDiv>

            {/* CARROSSEL CLIENTES DESKTOP */}
            <MotionDiv className="hidden md:block">
                <div className="w-full flex justify-center">
                    <h1 className="text-[#E46824] text-[24px] mt-30 font-normal">Nossos Clientes</h1>
                </div>

                <div className="max-h-26 flex overflow-x-auto gap-8.5 ml-5">
                    {clientes.map((c, i) => {
                        return (
                            <Image
                                key={i}
                                src={c.cliente}
                                alt="cliente"
                                width={80}
                                height={80}
                                className={`object-contain ${c.estilo}`}
                            />
                        )
                    })}
                </div>

            </MotionDiv>

            {/* MOBILE */}
            <MotionDiv className="md:hidden">
                <div className="w-full flex justify-center my-6  mt-12">
                    <h1 className="text-[#E46824] text-[20px] font-bold">Nossos Clientes</h1>
                </div>

                <div className="flex overflow-x-auto gap-4">
                    {clientesMobile.map((c, i) => {
                        return (
                            <Image
                                key={i}
                                src={c.cliente}
                                alt="cliente"
                                width={80}
                                height={80}
                                className={`object-contain ${c.estilo}`}
                            />
                        )
                    })}
                </div>

            </MotionDiv>

        </>
    );
}

export default Clientes