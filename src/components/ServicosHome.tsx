import Link from "next/link";
import Image from "next/image";
import MotionDiv from "@/src/components/MotionDiv";

const ServicosHome = () => {

    const rota = [

    ]
    return (
        <>
            <MotionDiv className="flex flex-col-reverse mx-auto items-center mb-30 md:mb-20 w-73 md:w-220 2xl:w-280 md:flex-row md:mt-40 md:max-h-200 md:gap-10">
                {/* TEXTO */}
                <div className="flex flex-col gap-3.25 relative md:gap-6 md:max-w-110 md:py-13.5 2xl:max-w-135">

                    <h2 className="text-[#BD4217] text-[36px] md:text-[28px] font-bold text-left font-serif">
                        Metropolitano - Grand Hyatt
                    </h2>

                    <p className="text-[16px] md:text-[14px] text-[#E46824] text-left">
                        No Grand Hyatt, a B4 desenvolveu a cenografia da área de montagem dos abadás, pensada como parte da experiência do final de semana.
                    </p>

                    <button className="w-full h-10 md:w-20 md:h-8 bg-[#BD4217] flex md:py-1.5 md:px-0 rounded-lg">
                        <Link href="/grand-hyatt" className="text-[#270F0E] my-auto mx-auto text-[18px] md:text-[12px] md:font-medium">
                            Saiba mais
                        </Link>
                    </button>
                </div>

                {/* IMAGEM */}
                <Image
                    src="/assets/grandHyatt.webp"
                    alt="Imagem do serviço"
                    width={500}
                    height={237}
                    className="object-cover md:object-contain rounded-lg xl:w-140"
                />

            </MotionDiv>

            {/* card 2 */}
            <MotionDiv className="flex flex-col mx-auto items-center mb-20 w-73 md:w-220 2xl:w-280 md:flex-row md:mt-20 md:max-h-130 md:gap-10">
                {/* IMAGEM */}
                <Image
                    src="/assets/copacabanaHome.webp"
                    alt="Imagem do serviço"
                    width={500}
                    height={237}
                    className="object-cover md:object-contain rounded-lg xl:w-140"
                />

                {/* TEXTO */}
                <div className="flex flex-col gap-3.25 relative md:gap-6 md:max-w-110 md:py-13.5 2xl:max-w-135">
                    <h2 className="text-[#BD4217] text-[36px] md:text-[28px] font-bold text-left font-serif">
                        Metropolitano - Copacabana Palace
                    </h2>

                    <p className="text-[16px] md:text-[14px] text-[#E46824] text-left my-3 md:my-0">
                        No Copacabana Palace, a B4 criou a cenografia do evento noturno de comemoração, transformando o espaço em um percurso de celebração, reconhecimento e memória
                    </p>

                    <button className="w-full h-10 md:w-20 md:h-8 bg-[#BD4217] flex md:py-1.5 md:px-0 rounded-lg">
                        <Link href="/copacabana-palace" className="text-[#270F0E] my-auto mx-auto text-[18px] md:text-[12px] md:font-medium">
                            Saiba mais
                        </Link>
                    </button>
                </div>
            </MotionDiv>
        </>
    );
}

export default ServicosHome