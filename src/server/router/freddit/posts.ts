import { createProtectedRouter, createRouter } from "../context";
import z, { any } from "zod";
/**
 * create router for posts operation
 */
const postsRouter = createRouter()
  .query("get-all", {
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
  })
  .query("get-by-id", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        const getPostById = await ctx.prisma.post.findUnique({
          where: {
            id: input.id,
          },
        });
        return getPostById;
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
            description: input.description,
            title: input.title,
          },
        },
      },
      where: {
        id: "cl948nnjm00n19shj7490nxs9",
      },
    });
    return createPosts;
  },
});
export { postsRouter, createPostsRouter };
