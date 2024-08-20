import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center gap-14">
      <Image src="/erro 404_desktop.png" alt="Erro" width={656} height={367} />
      <div className=" flex flex-col gap-4 items-center">
        <h2 className="text-verde-destaque text-[37px]">
          OPS! Página não encontrada.
        </h2>
        <p className="text-[26px] text-cinza-claro">
          Você pode voltar ao feed e continuar buscando projetos incríveis!
        </p>
        <Link href="/" className="mt-4 link flex gap-2">
          Voltar ao feed <ArrowLeft />
        </Link>
      </div>
    </div>
  );
}
