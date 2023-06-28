import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { connectToDB } from "@utils/database";
import User from "@models/User";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      type: "credentials",

      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        await connectToDB();
  
        const user = await User.findOne({ email });
        if (!user) throw new Error("email/password missmatch!");


        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) throw new Error("email/password missmatch!");

      
        return {
          name: user.name,
          email: user.email,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      return { ...token, ...user };
    },

    async session({ session, token }) {

    
      const sessionUser = await User.findOne({
        email: token.email,
      });

      session.user.id = sessionUser._id.toString();
      session.user.name = sessionUser.username;

      return session;
    },

    async signIn({ user }) {

      try {
        await connectToDB();

        const userExists = await User.findOne({
          email: user.email,
        });

        if (!userExists) {
          await User.create({
            email: user.email,
            username: user.name.replaceAll(" ", "").toLowerCase(),
            image: user.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
