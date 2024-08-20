import Image from "next/image";
import Link from "next/link";

export function Aside() {
  return (
    <aside className="mt-14 bg-cinza-escuro rounded-lg px-4 py-16 shrink-0 w-[177px] h-full flex flex-col items-center">
      <Link href="/">
        <Image
          width={128}
          height={40}
          src="/logo.png"
          alt="Logo da Code Connect"
        />
      </Link>
    </aside>
  );
}
