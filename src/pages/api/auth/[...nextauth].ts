import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Login/Sign up for Freddit",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "please enter username",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try{
        const User = { name: "AOI", email: "Hello@email.com",password:"something1234" }; 
        return User;
        }
        catch(error){
          console.log(error)
        }
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
