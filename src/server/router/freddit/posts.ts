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
          orderBy: {
            datePosted: "desc"
          }
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
        id: ctx.session.user.id,
      },
    });
    return createPosts;
  },
}).mutation("create-subreddit-post", {
  input: z.object({
    title:z.string(),
    description:z.string(),
    id:z.string()
  }),
  async resolve ({ctx,input}) {
    const createSubPost = await ctx.prisma.subreddit.update({
      data:{
        Posts:{
          create:{
            title:input.title,
            description:input.title,
          }
        }
      },
     where:{
        id:input.id
      } 
    })
  }
}).mutation("create-subreddit",{
  input : z.object({
    name:z.string(),
    description:z.string().max(300).min(10)
  }),
  async resolve({ctx,prisma,input}) {
    const createSubrreddit = await ctx.prisma.subreddit.create({
      data: {
        name: input.name,
        description:input.description,
      }
    })
  }
})
;
export { postsRouter, createPostsRouter };
