"use client"; // Error boundaries must be Client Components

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex w-full flex-col items-center gap-14">
      <Image src="/erro 400_desktop.png" alt="Erro" width={656} height={367} />
      <div className=" flex flex-col gap-4 items-center">
        <h2 className="text-verde-destaque text-[37px]">
          Opa! Um erro ocorreu.
        </h2>
        <p className="text-[26px] text-cinza-claro">
          Não conseguimos carregar a página. Volte para seguir navegando.
        </p>
        <Link href="/" className="mt-4 link flex gap-2">
          Voltar ao feed <ArrowLeft />
        </Link>
      </div>
    </div>
  );
}
