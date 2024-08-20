import { CardPost } from "@/components/card-post";
import { SearchBar } from "@/components/search-bar";
import { logger } from "@/lib/logger";
import { postListType, postType } from "@/types/postType";
import Link from "next/link";
import db from "@/services/db";

async function getPosts(page: number, therm?: string): Promise<postListType> {
  try {
    let where = {};

    if (therm) {
      where = {
        OR: [
          {
            body: {
              contains: therm,
              mode: "insensitive",
            },
          },
          {
            title: {
              contains: therm,
              mode: "insensitive",
            },
          },
        ],
      };
    }

    const perPage = 4;
    const totalItems = await db.post.count({ where });

    const totalPages = Math.ceil(totalItems / perPage);

    const next = totalPages > page ? page + 1 : null;

    const prev = page > 1 ? page - 1 : null;

    const posts = await db.post.findMany({
      where,
      take: perPage,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * perPage,
      include: { author: true },
    });

    return { data: posts, prev, next };
  } catch (error) {
    logger.error("Erro ao carregar posts", error);
    return { data: [] as postType[], prev: null, next: null };
  }
}
export default async function Home({
  searchParams,
}: {
  searchParams: { page?: number; q?: string };
}) {
  const pagina = Number(searchParams.page || 1);
  const searchTherm = searchParams?.q;
  const { data: posts, prev, next } = await getPosts(pagina, searchTherm);
  return (
    <div className="flex flex-col gap-14">
      <SearchBar />
      <main className="grid grid-cols-2 gap-6">
        {(posts || ([] as postType[])).map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.id}>
            <CardPost post={post} />
          </Link>
        ))}
      </main>
      <div className="text-center w-full text-verde-pastel flex justify-center gap-4">
        {prev && (
          <Link
            href={{ pathname: "/", query: { page: prev, q: searchTherm } }}
            className="text[18px] underline"
          >
            Página anterior
          </Link>
        )}
        {prev && next && <span> | </span>}
        {next && (
          <Link
            href={{ pathname: "/", query: { page: next, q: searchTherm } }}
            className="text[18px] underline"
          >
            Próxima página
          </Link>
        )}
      </div>
    </div>
  );
}
