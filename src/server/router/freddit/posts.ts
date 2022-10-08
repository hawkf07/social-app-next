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

const createPostsRouter = createProtectedRouter()
  .mutation("create-post", {
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
              votes: 0,
              votesType: "increment",
            },
          },
        },
        where: {
          id: "cl8zqs19u00009sjp4fkymkq4",
        },
      });
      return createPosts;
    },
  })
  .query("get-all-user", {
    async resolve({ ctx }) {
      return ctx.prisma.user.findMany();
    },
  });
export { postsRouter, createPostsRouter };
