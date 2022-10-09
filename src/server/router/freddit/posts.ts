import { createProtectedRouter, createRouter } from "../context";
import z, { any } from "zod";
/**
 * create router for posts operation
 */
const postsRouter = createRouter().query("get-all", {
  async resolve({ ctx }) {
    try {
      const getAllPosts = await ctx.prisma.post.findMany({
        include: {
          User: true,
        },
      });
      return getAllPosts;
    } catch (error) {
      console.log(error);
    }
  },
});

const createPostsRouter = createProtectedRouter().mutation("create-post", {
  input: z.object({
    title: z.string(),
    description: z.string(),
  }),
  async resolve({ ctx, input, type }) {
    const createPosts = await ctx.prisma.user.update({
      data: {
        Posts: {
          create: {
            description: input.title,
            title: input.title,
          },
        },
      },
      where: {
        id: "cl90i0gsk00089swcwtxpaef6",
      },
    });
    return createPosts;
  },
});

export { postsRouter, createPostsRouter };
