import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from 'next/navigation';

export default async function loginIsRequired() {
    const session = await getSession();

    if (!session) {
        redirect('/api/auth/login');
    }

    return session;
}