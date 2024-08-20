import Image from "next/image";
import { Avatar } from "./avatar";
import Link from "next/link";
import { postType } from "@/types/postType";

type CardPostProps = {
  post: postType;
};

export function CardPost({ post }: CardPostProps) {
  return (
    <article className="bg-cinza-escuro rounded-lg overflow-hidden">
      <header className="flex p-6 bg-cinza-medio">
        <figure>
          <Image
            className="aspect-[6:2] w-full h-auto rounded-lg"
            src={post.cover}
            alt={post.title}
            width={961}
            height={300}
          />
        </figure>
      </header>
      <section className="p-4 flex flex-col gap-2 text-cinza-claro">
        <h2 className="text-[18px] font-semibold leading-8">{post.title}</h2>
        <p className="text-[15px] leading-7">{post.body}</p>
      </section>
      <footer className="p-4 flex items-end">
        <Avatar
          username={post?.author?.username || ""}
          name={post?.author?.name || ""}
          image={post?.author?.avatar || ""}
        />
      </footer>
    </article>
  );
}
