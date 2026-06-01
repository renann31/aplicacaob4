import Image from "next/image";
import MotionDiv from "./MotionDiv";

            /* Grand-Hyatt */

export const CarrosselGH = () => {
    const gh = [
        {
            "imagem": "/assets/GH-1.webp"
        },
        {
            "imagem": "/assets/GH-2.webp"
        },
        {
            "imagem": "/assets/GH-3.webp"
        },
        {
            "imagem": "/assets/GH-4.webp"
        },
        {
            "imagem": "/assets/GH-5.webp"
        },
    ]
    
    return (
        <MotionDiv className="flex gap-2 overflow-x-auto ml-5 md:ml-[max(1rem,calc((100vw-925px)/2))] 2xl:ml-[max(1rem,calc((100vw-1160px)/2))]">
            {gh.map((i, index) => {
                return (
                    <Image
                        key={index}
                        src={i.imagem} 
                        alt="imagem do Grand-Hyatt"
                        width={280}
                        height={216}
                        className="object-contain md:w-100 md:h-75 mr-4"
                    />
                )
            })}
        </MotionDiv>
    );
}

            /* copacabana palace */
export const CarrosselCP = () => {
    const cp = [
        {
            "imagem": "/assets/CP-1.webp"
        },
        {
            "imagem": "/assets/CP-2.webp"
        },
        {
            "imagem": "/assets/CP-3.webp"
        },
        {
            "imagem": "/assets/CP-4.webp"
        },
        {
            "imagem": "/assets/CP-5.webp"
        },
    ]
    
    return (
        <MotionDiv className="flex gap-2 overflow-x-auto ml-5 md:ml-[max(1rem,calc((100vw-925px)/2))] 2xl:ml-[max(1rem,calc((100vw-1160px)/2))]">
            {cp.map((i, index) => {
                return (
                    <Image
                        key={index}
                        src={i.imagem} 
                        alt="imagem do Copacabana Palace"
                        width={280}
                        height={216}
                        className="object-contain md:w-100 md:h-75 mr-4"
                    />
                )
            })}
        </MotionDiv>
    );
}