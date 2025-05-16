import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "your username" },
        password: { label: "Password", type: "password", placeholder: "your password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "User", email: "user@example.com" }; // Example user

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login', // Custom sign-in page
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    jwt: true,
  },
  secret: process.env.NEXTAUTH_SECRET,
});