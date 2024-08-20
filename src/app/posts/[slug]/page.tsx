import { CardPost } from "@/components/card-post";

import { remark } from "remark";
import html from "remark-html";
import { SearchBar } from "@/components/search-bar";
import { logger } from "@/lib/logger";
import { postType } from "@/types/postType";
import db from "@/services/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug: string): Promise<postType> {
  try {
    const post = await db.post.findFirst({
      where: { slug },
      include: { author: true },
    });
    if (!post) {
      throw new Error(`Post com o slug ${slug} não encontrado!`);
    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml;
    return post;
  } catch (error) {
    logger.error("Erro ao carregar post com o slug", { slug, error });
  }
  redirect("/not-found");
}

export default async function Posts({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(slug);

  return (
    <div className="flex flex-col gap-14">
      <SearchBar />
      <div className="flex w-full flex-col gap-6">
        <CardPost post={post} />
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-cinza-medio font-semibold text-[22px]">Código</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.markdown }}
            className="bg-cinza-escuro p-4 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
