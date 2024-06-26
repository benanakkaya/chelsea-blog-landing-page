import React from 'react';
import Image from "next/image"

export default function HeaderTop() {
    return (
        <div className='hidden bg-primary h-32 lg:flex items-center justify-center'>
            <Image
                className='cursor-pointer hover:animate-pulse'
                width={100}
                height={100}
                src="/talk-chelsea-logo-1.webp"
            />
        </div>
    )
}
