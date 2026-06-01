"use client";
import Swal from "sweetalert2";
import { useState, FormEvent, ChangeEvent } from "react";
import MotionDiv from "@/src/components/MotionDiv";

const FaleConosco = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  const [enviado, setEnviado] = useState<boolean>(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const data = {
      nome,
      email,
      mensagem,
      telefone,
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: { success: boolean } = await res.json();

      if (result.success) {
        await Swal.fire({
          icon: "success",
          title: "Mensagem enviada!",
          text: "Recebemos sua mensagem e entraremos em contato em breve.",
          confirmButtonText: "OK",
        });

        setNome("");
        setEmail("");
        setMensagem("");
        setTelefone("");

        setEnviado(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Não foi possível enviar sua mensagem.",
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Erro de conexão",
        text: "Tente novamente mais tarde.",
      });
    }
  };

  return (
    <MotionDiv
      id="contato"
      className="w-76 mt-10 md:w-220 mx-auto h-auto relative flex flex-col md:h-144 md:mt-20 2xl:w-280"
    >
      <div className="w-65 md:w-1/2 flex flex-col mb-4 md:mb-10 ">
        <h1 className="text-[#BD4217] text-[36px] md:text-[64px] font-serif font-bold">
          Fale Conosco
        </h1>

        <p className="text-[#BD4217] font-sans text-[10px] md:text-[14px] font-light">
          Quer transformar seus sonhos em realidade? Deixe-nos te ajudar!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:gap-4"
      >
        <input
          type="text"
          required
          placeholder="Nome"
          value={nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNome(e.target.value)
          }
          className="border border-[#BD4217]/50 md:border-[#BD4217] rounded-[5px] md:rounded-[19px] 
            px-3 md:px-6 w-full h-3.5 md:h-10 
            text-white text-[12px] md:text-[14px] 
            bg-transparent
            placeholder:text-white/50
            focus:outline-none focus:ring-2 focus:ring-[#F5C069]/40
            transition-all duration-200"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="border border-[#BD4217]/50 md:border-[#BD4217] rounded-[5px] md:rounded-[19px] 
            px-3 md:px-6 w-full h-3.5 md:h-10 
            text-white text-[12px] md:text-[14px] 
            bg-transparent
            placeholder:text-white/50
            focus:outline-none focus:ring-2 focus:ring-[#F5C069]/40
            transition-all duration-200"
          />

          <input
            type="tel"
            required
            placeholder="Telefone"
            value={telefone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTelefone(e.target.value)
            }
            className="border border-[#BD4217]/50 md:border-[#BD4217] rounded-[5px] md:rounded-[19px] 
            px-3 md:px-6 w-full h-3.5 md:h-10 
            text-white text-[12px] md:text-[14px] 
            bg-transparent
            placeholder:text-white/50
            focus:outline-none focus:ring-2 focus:ring-[#F5C069]/40
            transition-all duration-200"
          />
        </div>

        <textarea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setMensagem(e.target.value)
          }
          className="border border-[#BD4217]/50 md:border-[#BD4217] rounded-[5px] md:rounded-[19px] 
          p-2 md:p-4 w-full h-25 md:h-54.5 
          text-white mt-2 text-[12px] md:text-[14px] 
          bg-transparent
          placeholder:text-white/50
          focus:outline-none focus:ring-2 focus:ring-[#F5C069]/40
          transition-all duration-200"
        />

        <div className="flex items-center justify-center md:justify-end gap-4">
          {enviado && (
            <div className="hidden md:block w-[12%] text-center">
              <span className="text-white font-bold text-[12px] md:text-[16px] font-sans">
                Mensagem enviada!
              </span>
            </div>
          )}

          <button
            type="submit"
            className={`bg-[#E46824] text-[#320A27] font-bold rounded-2xl md:rounded-xl
              px-12 py-1 mt-4 md:w-40 md:h-10 md:mt-0
              opacity-80 hover:opacity-100
              hover:scale-105 transition-all duration-200
              font-sans text-[12px]
            ${enviado  ? "md:px-3"  : ""}`}
          >
            {enviado ? "ENVIAR OUTRA MENSAGEM" : "ENVIAR"}
          </button>
        </div>
      </form>
    </MotionDiv>
  );
};

export default FaleConosco;