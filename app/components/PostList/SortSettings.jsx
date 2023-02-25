import Link from 'next/link'
import React from 'react';
import { AiOutlineClockCircle, AiOutlineHeart, AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

export default function SortSettings() {
    return (
        <div className='w-full flex items-center justify-end gap-3  text-gray-400'>
            <Link href="/#" className="flex items-center justify-center gap-1 text-gray-600 font-bold">
                <AiOutlineClockCircle />
                LATEST
            </Link>
            <Link href="/#" className="flex items-center justify-center gap-1">
                <AiOutlineHeart />
                POPULAR
            </Link>
            <Link href="/#" className="flex items-center justify-center gap-1">
                <AiOutlinePlayCircle />
                VIDEOS
            </Link>
            <Link href="/#" className="flex items-center justify-center gap-1">
                <MdOutlinePhotoSizeSelectActual />
                PHOTOS
            </Link>
        </div>
    )
}
