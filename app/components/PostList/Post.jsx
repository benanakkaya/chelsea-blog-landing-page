import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai"

export default function Post({post}) {



    return (
        <div key={post.id} className='grid md:grid-cols-2'>
            <div className='w-full h-60 relative group bg-primary cursor-pointer'>
                <Image className='group-hover:opacity-60 transition-opacity duration-200' src={post.image} alt={post.id} fill />
            </div>
            <div className=' border-t border-solid border-gray-300 p-4'>
                <div className='flex flex-col gap-2'>
                    <small className='text-xs text-gray-400 uppercase'>{post.tag}</small>
                    <Link href="/#" className='text-2xl font-bold text-primary'>{post.title}</Link>
                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                        <span className='flex items-center gap-1 uppercase'>BY <Link className='text-primary' href="/#">{post.author}</Link></span>
                        <span className='flex items-center gap-1 uppercase'><AiOutlineClockCircle />{post.date}</span>
                    </div>
                    <p className='text-black text-sm'>{post.text}</p>
                </div>

            </div>

        </div>
    )
}
