import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function SideMenu() {

    const posts = [
        {
            id: 1,
            tag: "NEWS",
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/11/christian-pulisic-chelsea-100x100.jpg",
            title: "Rio Ferdinand defends the Blues, Christian Pulisic..."
        },
        {
            id: 2,
            tag: "NEWS",
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/10/aubameyang-chelsea-100x100.jpg",
            title: "The simple stat that shows where Chelsea are struggling"
        },
        {
            id: 3,
            tag: "OPINIONS",
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/12/trevoh-chalobah-v-aston-villa-100x100.jpg",
            title: "How Chelsea might line-up vs Villa on Sunday"
        },
        {
            id: 4,
            tag: "NEWS",
            image: "https://www.talkchelsea.net/wp-content/uploads/2022/11/fifa-world-cup-qatar-1-100x100.jpg",
            title: "How to make big money betting on the World Cup"
        },
        {
            id: 5,
            tag: "NEWS",
            image: "https://www.talkchelsea.net/wp-content/uploads/2021/09/thiago-silva-goal-v-tottenham-100x100.jpg",
            title: "Thiago Silva doesn’t need to dope to be the best around"
        },
    ]


    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <h5 className='text-xl text-gray-400 font-bold'>Follow Us</h5>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-facebook'>
                        <FaFacebookF />
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-twitter'>
                        <FaTwitter />
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-instagram'>
                        <FaInstagram />
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-youtube'>
                        <FaYoutube />
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-linkedin'>
                        <FaLinkedinIn />
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-tiktok'>
                        <FaTiktok />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h5 className='text-xl text-gray-400 font-bold'>Popular Posts</h5>
                <div className='flex flex-col gap-2'>
                    {posts.map((post) => (
                        <div className='flex items-center gap-3 cursor-pointer group'>
                            <div className='flex items-center'>
                                <div className='w-8 h-8 z-10 relative -right-5 rounded-full bg-primary flex items-center justify-center text-lg text-white font-bold border border-3 border-solid'>
                                    {post.id}
                                </div>
                                <div className='w-20 h-20 rounded-full bg-primary'>
                                    <img src={post.image} alt={post.id} className="w-20 h-20 rounded-full group-hover:opacity-60 transition-all duration-200" />
                                </div>
                            </div>
                            <div className='flex flex-col items-start h-full'> 
                                <small className='text-gray-400 font-bold'>{post.tag}</small>
                                <h4 className='text-lg font-bold text-primary'>{post.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
