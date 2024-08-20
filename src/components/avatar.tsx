import Image from "next/image";
import { ReactNode } from "react";

type AvatarProps = {
  name: string;
  username: string;
  image: string;
};

export function Avatar({ name, username, image }: AvatarProps) {
  return (
    <ul className="flex items-center ml-auto gap-2">
      <li>
        <Image src={image} alt={`Avatar de ${name}`} width={32} height={32} />
      </li>
      <li className="font-semibold text-cinza-medio text-[15px]">
        @{username}
      </li>
    </ul>
  );
}
