import { WebDetails } from '@/Details';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Admin = () => {
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        if (session && session.user) {
            const isAdmin = WebDetails.admins.find((email) => email === session.user);
            if (isAdmin === undefined) {
                router.push('/');
            }
        } else {
            router.push('/');
        }
    }, [session])
    return (
        <div>Admin</div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
        },
    }
}

export default Admin