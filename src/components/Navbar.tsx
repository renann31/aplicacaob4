import Image from "next/image"
import Link from "next/link"
import MotionDiv from "@/src/components/MotionDiv";

const Navbar = () => {
    const estilo = "text-[16px] text-[#BD4217] md:text-[16px] hover:text-[#F5C069] transition font-sans font-normal"

    return (
        <MotionDiv className="w-full h-auto md:h-25 pt-5 md:pt-0 my-6">
            <div className="max-w-220 2xl:max-w-280 mx-auto w-full flex flex-col md:flex-row items-center md:justify-between md:max-h-25 md:items-center">

                <div className="flex h-30.75 items-center pb-6 md:gap-3 md:pb-0">
                    <div className="flex justify-center md:justify-start md:w-full">
                        {/* celular */}
                            <Image
                                src="/assets/logo.svg"
                                alt="logo b4"
                                width={59}
                                height={86}
                                className="object-contain ml-6 mr-4 block md:hidden"
                            />
                        {/* desktop */}
                            <Image
                                src="/assets/logo.svg"
                                alt="logo b4"
                                width={28}
                                height={41}
                                className="object-contain md:block hidden"
                            />
                    </div>
                    <h1 className="text-[46px] text-[#BD4217] font-black text-left leading-13.75 md:text-[46px] md:whitespace-nowrap md:leading-none">B4 CREATIVE</h1>
                </div>

                {/* LINKS */}
                <div className="flex flex-row items-center gap-6 md:gap-20 w-full md:w-auto justify-center md:justify-end">
                    <Link href="/" className={estilo}>Projetos</Link>
                    <Link href="/sobre" className={estilo}>Sobre Nós</Link>
                    <a href="#contato" className={`${estilo} scroll-smooth`}>Contato</a>
                </div>

            </div>
        </MotionDiv>
    );
}

export default Navbar