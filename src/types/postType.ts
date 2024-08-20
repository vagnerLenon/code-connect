import { z } from "zod";

// author: {
//   id: number;
//   username: string;
//   name: string;
//   avatar: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// };
// } & {
// id: number;
// cover: string;
// title: string;
// slug: string;
// body: string;
// markdown: string;
// authorId: number;
// createdAt: Date;
// updatedAt: Date;

export const authorInterface = z.object({
  id: z.number().int(),
  username: z.string().min(1),
  name: z.string().min(1),
  avatar: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const postInterface = z.object({
  id: z.number().int(),
  cover: z.string().url(),
  title: z.string(),
  slug: z.string(),
  body: z.string(),
  markdown: z.string(),
  authorId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  author: authorInterface.optional(),
});

export const postListInterface = z.object({
  first: z.number().int().nullable().optional(),
  prev: z.number().int().nullable().optional(),
  next: z.number().int().nullable().optional(),
  last: z.number().int().nullable().optional(),
  pages: z.number().int().nullable().optional(),
  items: z.number().int().nullable().optional(),
  data: z.array(postInterface).optional(),
});

export type postType = z.infer<typeof postInterface>;
export type authorType = z.infer<typeof authorInterface>;
export type postListType = z.infer<typeof postListInterface>;
