import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import {AiOutlineClockCircle} from "react-icons/ai"

export default function PopularPosts() {


    const posts = [
        {
            id: 1,
            image: "/graham-potter-chelsea.webp",
            tag: "NEWS",
            title: "Will Graham Potter be sacked?",
            author: "Barry Bridges",
            date: "24 FEB, 2023"
        },
        {
            id: 2,
            image: "/reece-james-chelsea-harry-kane-tottenham.webp",
            tag: "MATCH PREVIEWS",
            title: "How Chelsea should lineup for Spurs",
            author: "Simon Philips",
            date: "23 FEB, 2023"
        },
        {
            id: 3,
            image: "/thiago-silva-chelsea.webp",
            tag: "OPINIONS",
            title: "Chelsea must remember leadership balance...",
            author: "Simon Philips",
            date: "22 FEB, 2023"
        },
    ]


    return (
        <div className='container grid grid-cols-1 md:grid-cols-3 '>
            {posts.map((post) => (
                <div key={post.id} className='cursor-pointer group'>
                    <div className='w-full h-60 relative bg-primary'>
                        <Image className='group-hover:opacity-60 transition-opacity duration-200' fill src={post.image} alt={post.id} />
                    </div>
                    <div className='flex flex-col gap-2 items-center justify-center relative -top-4 px-12'>
                        <span className='text-sm p-1 border-white border-2 border-solid text-white bg-primary'>{post.tag}</span>
                        <h3 className='text-2xl font-bold text-primary text-center'>{post.title}</h3>
                        <div className='flex items-center justify-center gap-2 text-xs text-gray-400'> 
                            <span className='flex items-center gap-1 uppercase'>BY <Link className='text-primary' href="/#">{post.author}</Link></span>
                            <span className='flex items-center gap-1 uppercase'><AiOutlineClockCircle/> {post.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
