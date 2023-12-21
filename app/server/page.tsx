import {options} from '../api/auth/[...nextauth]/options';
import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';

export default async function Page() {
	const session = await getServerSession(options);

	if(!session) {
		redirect('/api/auth/signin?callbackUrl=/server');
	}

	return <h>This is Server Page!</h>;
}