import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
		    clientId: process.env.GITHUB_ID as string,
		    clientSecret: process.env.GITHUB_SECRET as string
	  	}),
	  	CredentialsProvider({
	  		name: 'Credentials',
	  		credentials: {
	  			username: {
	  				label: 'Username:', 
	  				type: 'text',
	  				placeholder: 'Your username'
	  			},
	  			password: {
	  				label: 'Password:',
	  				type: 'password',
	  				placeholder: 'Password'
	  			}
	  		},
	  		async authorize(credentials, req) {
	  			const user = { id: '42', name: 'Dave', password: 'nextauth' };

	  			if(credentials?.username === user.name && credentials?.password === user.password) {
	  				return user;
	  			} else {
	  				return null;
	  			}
	  		}
	  	})
	],
}