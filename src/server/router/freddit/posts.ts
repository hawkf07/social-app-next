import { createProtectedRouter, createRouter } from "../context";
import z, { any } from "zod";
/**
 * create router for posts operation
 */
const postsRouter = createRouter().query("get-all", {
  async resolve({ ctx }) {
    try {
      const getAllPosts = await ctx.prisma.post.findMany();
      return getAllPosts;
    } catch (error) {
      console.log(error);
    }
  },
});

const createPostsRouter = createProtectedRouter().query("create-post", {
  input: z.object({
    title: z.string(),
    description: z.string(),
  }),
  async resolve({ ctx, input, type }) {
    const createPosts = await ctx.prisma.user.create({
      data: {
        Posts: {
          create: {
            title: input.title,
            description: input.description,
          },
        },
      },
    });
  },
});
export { postsRouter };
