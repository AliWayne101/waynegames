import { WebDetails } from '@/Details';
import Button from '@/components/Button';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Admin = () => {
    const router = useRouter();
    const { data: session } = useSession();
    useEffect(() => {
        console.log(session);
        if (session && session.user && session.user) {
            const isAdmin = WebDetails.admins.find((email) => email === session.user?.email);
            if (isAdmin === undefined)
                router.push('/');
        } else {
            router.push('/');
        }
    }, [session])

    const [_photo, set_photo] = useState<File | null>();
    const [isUploaded, setIsUploaded] = useState(false);

    const [entryData, setEntryData] = useState({
        title: "",
        image: "",
        platform: "",
        price: 0,
        originalPrice: 0,
        quantity: 0
    });


    const updateEntry = (e: HTMLInputElement) => {
        setEntryData({
            ...entryData, [e.name]: e.value
        });
    }

const photoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if (files && files[0])
            set_photo(files[0]);
    }

    useEffect(() => {
        if (_photo) {
            const formData = new FormData();
            formData.append('image', _photo);
            axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                params: {
                    key: process.env.NEXT_PUBLIC_IMG_BB!
                }
            })
            .then((response) => {
                setIsUploaded(true);
                setEntryData({
                    ...entryData, image: response.data.data.url
                });
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [_photo]);

    return (
        <>
            <Head>
                <title>Admin - Games Heaven</title>
            </Head>
            <Navbar />
            <main>
                <Hero />

                <div className="w-full mt-10">
                    <div className="titles">Add new game</div>
                    <div className="mt-5">
                        <span>Game Title: </span>
                        <input type="text" name="title" className="bg-transparent w-[50%] p-2 firaCode border border-1 block" onChange={(e) => updateEntry(e.currentTarget)} />
                    </div>
                    <div className="mt-5">
                        <span>Game Poster Image:</span>
                        <input type="file" name="posterFile" id="posterFile" className="bg-transparent w-[50%] p-2 firaCode border border-1 block" onChange={photoUpload}/>
                    </div>
                    <div className="mt-5">
                        <span>Game Platform: </span>
                        <input type="text" name="platform" className="bg-transparent w-[50%] p-2 firaCode border border-1 block" onChange={(e) => updateEntry(e.currentTarget)} />
                    </div>
                    <div className="mt-5">
                        <span>Game Price: </span>
                        <input type="number" name="price" className="bg-transparent w-[50%] p-2 firaCode border border-1 block" onChange={(e) => updateEntry(e.currentTarget)} />
                    </div>
                    <div className="mt-5">
                        <span>Game Original Price: </span>
                        <input type="number" name="originalPrice" className="bg-transparent w-[50%] p-2 firaCode border border-1 block" onChange={(e) => updateEntry(e.currentTarget)} />
                    </div>
                    <div className="mt-5">
                        <span>Game Quantity: </span>
                        <input type="number" name="quantity" className="bg-transparent w-[50%] p-2 firaCode border border-1 block" onChange={(e) => updateEntry(e.currentTarget)} />
                    </div>
                    { isUploaded && (
                        <span className='mt-5 block'><Button text={'Add game'} /></span>
                    ) }
                </div>
            </main>
            <Footer />
        </>
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