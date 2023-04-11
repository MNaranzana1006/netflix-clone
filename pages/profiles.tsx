import React from 'react'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';

export async function getServerSideProps(context : NextPageContext) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}

export default function Profiles() {
    const router = useRouter();
    const {data: user} = useCurrentUser();
    return (
        <div className='flex h-full items-center justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-white text-3xl md:text-6xl'>Who is watching?</h1>
                <div className='flex items-center justify-center gap-8 mt-10'>
                    <div onClick={() => router.push("/")}>
                        <div className='group flex-row w-44 mx-auto'>
                            <div className='flex items-center justify-center rounded-md overflow-hidden border-4 border-transparent w-44 h-44 group-hover:border-white group-hover:cursor-pointer transition'>
                                <img src="/images/default-blue.png" alt="Profile" />
                            </div>
                            <div className='text-gray-400 text-center mt-4 group-hover:text-white text-2xl'>
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
