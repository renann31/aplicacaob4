import Image from "next/image";
import Link from "next/link";
import MotionDiv from "@/src/components/MotionDiv";

const Footer = () => {
    return (
        <>
            {/* linha horizontal */}
            <MotionDiv className="md:bg-white/50 md:w-220 md:h-px md:mx-auto md:mt-20"> </MotionDiv>
            
            <MotionDiv className="h-full flex items-center justify-between md:w-220 md:mx-auto md:h-70.75 md:py-10">
                {/* lado esquerdo */}
                <div className="flex-col md:flex md:flex-row md:gap-12">
                    <div className="relative">
                        <Image
                            src="/assets/logoHome.svg"
                            alt="Logo do Rodapé"
                            width={100}
                            height={150}
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-[#BD4217] text-[25px] font-bold">B4 CREATIVE</h1>
                        <p className="text-[#E46824] text-[20px] font-light">Be For You</p>
                        <div className="md:flex md:gap-3 md:mt-5">
                            <Link href="">
                                <Image
                                    src="/assets/insta.svg"
                                    alt="logo Instagram"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                ></Image>
                            </Link>
                            <Link href="">
                                <Image
                                    src="/assets/linkedin.svg"
                                    alt="logo Linkedin"
                                    width={28}
                                    height={23}
                                    className="object-contain"
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* lado direito */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">

                    {/* Coluna esquerda */}
                    <div className="flex flex-col md:w-18.75">
                        <Link href="/sobre" className="font-semibold font-sans text-[#BD4217] text-[9px] md:text-[12px] mb-3 md:mb-4">Projetos</Link>

                        <Link href="/grand-hyatt" className="text-[7px] md:text-[9px] text-[#E46824] mb-3 md:mb-2.75">Metropolitano Grand Hyatt</Link>
                        <Link href="/copacabana-palace" className="text-[7px] md:text-[9px] text-[#E46824] mb-3 md:mb-2.75">Metropolitano Copacabana Palace</Link>
                        <Link href="/festival-timbre" className="text-[7px] md:text-[9px] text-[#E46824] mb-3 md:mb-2.75">Festival Timbre</Link>
                        <Link href="/camaru-2024" className="text-[7px] md:text-[9px] text-[#E46824] mb-3 md:mb-2.75">Camaru 2024</Link>
                        <Link href="/camaru-2025" className="text-[7px] md:text-[9px] text-[#E46824] mb-3 md:mb-2.75">Camaru 2025</Link>
                    </div>

                    {/* Coluna direita */}
                    <div className="flex flex-col">
                        <Link href="/sobre" className="font-semibold font-sans text-[#BD4217] text-[9px] md:text-[12px] mb-3 md:mb-4">Sobre nós</Link>
                    </div>

                </div>
            </MotionDiv>
        </>
    );
}

export default Footer