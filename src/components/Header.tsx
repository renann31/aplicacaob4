import Image from "next/image"
import MotionDiv from "@/src/components/MotionDiv";

const Header = () => {
    return (
        <>
            <MotionDiv>
                <Image
                    src="/assets/heroHome.webp"
                    alt="a experiência começa aqui"
                    width={400}
                    height={198}
                    className="object-contain md:w-full"
                />
            </MotionDiv>
            <MotionDiv className="flex md:w-220 md:mt-20 w-72.5 mx-auto md:px-0 md:gap-27.5 md:max-h-60 2xl:w-280 ">

                <Image
                    src="/assets/logoHome.svg"
                    alt="logo"
                    width={150}
                    height={220}
                    className="object-contain hidden md:block 2xl:w-54 2xl:h-75"
                />
                <Image
                    src="/assets/logoHomeM.svg"
                    alt="logo"
                    width={61}
                    height={89}
                    className="object-contain md:hidden mr-5"
                />
                <div className="md:flex md:flex-col md:gap-10 md:py-5">
                    <div className="my-20 md:px-0 md:my-0 md:justify-start">
                        <h1 className="text-[#BD4217] text-[36px] 2xl:text-[80px] font-bold">Be For You</h1>
                        <p className="text-[#E46824] text-[15px] 2xl:text-[26px] font-normal">soluções visuais cenográficas</p>
                    </div>
                    <p className="text-[#BD4217] text-[20px] font-normal mb-50 md:mb-0 hidden md:block">Partindo de um conceito que torno a B4 única, "Be For You" (Ser Por Você), estamos sempre buscando nos atualizar, para entregar inovação e tudo o que há de melhor ao nosso público.</p>

                </div>
            </MotionDiv>
        </>
    );
}

export default Header