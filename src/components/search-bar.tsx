import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form className="w-full flex gap-2" action="/">
      <div className="bg-cinza-escuro px-4 py-2 flex gap-2 items-center text-cinza-claro w-full rounded">
        <Search />
        <input
          type="text"
          name="q"
          className="bg-transparent text-[22px] w-full h-full outline-none"
          placeholder="Digite o que você procura"
        />
      </div>
      <button className="bg-verde-destaque hover:bg-verde-destaque/80 px-4 rounded-lg font-semibold text-[18px] text-black">
        Buscar
      </button>
    </form>
  );
}
