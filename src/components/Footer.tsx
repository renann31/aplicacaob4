import Image from "next/image";
import Link from "next/link";
import MotionDiv from "@/src/components/MotionDiv";

const Footer = () => {
    return (
        <>
            {/* linha horizontal */}
            <MotionDiv className="md:bg-[#F5C069]/50 md:w-220 md:h-px md:mx-auto md:mt-20 2xl:w-280"> </MotionDiv>
            
            <MotionDiv className="mx-auto mt-10 md:flex items-center justify-between md:w-220 md:h-70.75 md:py-10 2xl:w-280">
                {/* lado esquerdo */}
                <div className="flex-col md:flex md:flex-row md:gap-12">
                    <div className="mt-20 md:mt-0">
                        <Image
                            src="/assets/logoHome.svg"
                            alt="Logo do Rodapé"
                            width={135}
                            height={198}
                            className="object-cover md:object-contain mx-auto"
                        />
                    </div>
                    <div>
                        <h1 className="text-[#BD4217] text-[25px] font-bold hidden md:block">B4 CREATIVE</h1>
                        <p className="text-[#E46824] text-[20px] font-light italic hidden md:block">Be For You</p>
                        <div className="w-21 flex gap-3 mt-5 mx-auto md:mx-0">
                            <Link href="">
                                <Image
                                    src="/assets/insta.svg"
                                    alt="logo Instagram"
                                    width={46}
                                    height={46}
                                    className="object-contain md:w-7.5 md:h-7.5"
                                ></Image>
                            </Link>
                            <Link href="">
                                <Image
                                    src="/assets/linkedin.svg"
                                    alt="logo Linkedin"
                                    width={46}
                                    height={46}
                                    className="object-contain md:w-7.5 md:h-7.5"
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* lado direito */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-25 md:mt-0 mx-auto md:mx-0 w-72 md:w-auto mb-5">
                    {/* Coluna esquerda - DESKTOP */}
                    <div className="hidden md:flex flex-col w-18.75">
                        <Link href="/sobre" className="font-semibold font-sans text-[#BD4217] text-[15px] mb-4">Projetos</Link>

                        <Link href="/grand-hyatt" className="text-[11px] text-[#E46824] mb-2.75">Metropolitano Grand Hyatt</Link>
                        <Link href="/copacabana-palace" className="text-[11px] text-[#E46824] mb-2.75">Metropolitano Copacabana Palace</Link>
                        <Link href="/festival-timbre" className="text-[11px] text-[#E46824] mb-2.75">Festival Timbre</Link>
                        <Link href="/camaru-2023" className="text-[11px] text-[#E46824] mb-2.75">Camaru 2023</Link>
                        <Link href="/camaru-2024" className="text-[11px] text-[#E46824] mb-2.75">Camaru 2024</Link>
                    </div>

                    {/* Coluna esquerda - MOBILE */}
                    <div className="flex flex-col w-30 md:hidden">
                        <Link href="/sobre" className="font-semibold font-sans text-[#BD4217] text-[18px] mb-5">Projetos</Link>

                        <Link href="/grand-hyatt" className="text-[12px] text-[#E46824] mb-3">Metropolitano Grand Hyatt</Link>
                        <Link href="/copacabana-palace" className="text-[12px] text-[#E46824] mb-3">Metropolitano Copacabana Palace</Link>
                        <Link href="/festival-timbre" className="text-[12px] text-[#E46824] mb-3">Festival Timbre</Link>
                        <Link href="/camaru-2023" className="text-[12px] text-[#E46824] mb-3">Camaru 2023</Link>
                        <Link href="/camaru-2024" className="text-[12px] text-[#E46824] mb-3">Camaru 2024</Link>
                    </div>

                    {/* Coluna direita */}
                    <div className="flex flex-col">
                        <Link href="/sobre" className="font-semibold font-sans text-[#BD4217] text-[18px] md:text-[15px] mb-3">Sobre nós</Link>
                    </div>

                </div>
            </MotionDiv>
        </>
    );
}

export default Footer