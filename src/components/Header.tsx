import Image from "next/image"
import { motion } from "motion/react"

const Header = () => {

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
                viewport={animation.viewport}>
                <Image
                    src="/assets/heroHome.png"
                    alt="a experiência começa aqui"
                    width={400}
                    height={198}
                    className="object-contain md:w-full"
                />
            </motion.div>
            <motion.div
                initial={animation.initial}
                whileInView={animation.whileInView}
                transition={animation.transition}
                viewport={animation.viewport}>
                <div className="flex md:w-220 md:mt-7.75 w-72.5 mx-auto md:px-0 md:gap-27.5 md:max-h-60">
                    <Image
                        src="/assets/logoHome.svg"
                        alt="logo"
                        width={150}
                        height={220}
                        className="object-contain"
                    />
                    <div className="md:flex md:flex-col md:gap-10 md:py-5">
                        <div className="my-20 px-10 flex flex-col justify-center md:px-0 md:my-0 md:justify-start">
                            <h1 className="text-[#BD4217] text-[36px] font-bold">Be For You</h1>
                            <p className="text-[#E46824] text-[15px] font-normal">soluções visuais cenográficas</p>
                        </div>
                        <p className="text-[#BD4217] text-[20px] font-normal mb-50 md:mb-0">Partindo de um conceito que torno a B4 única, "Be For You" (Ser Por Você), estamos sempre buscando nos atualizar, para entregar inovação e tudo o que há de melhor ao nosso público.</p>

                    </div>



                </div >
            </motion.div>
        </>
    );
}

export default Header