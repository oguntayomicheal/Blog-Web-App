import { getServerSession } from "next-auth";
// import { authOptions } from "../(auth)/api/auth/[...nextauth]/route";

import { AuthOptions } from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prismadb";
import GoogleProvider from "next-auth/providers/google";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    // })
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
    };
  } catch (error: any) {
    return null;
  }
}
