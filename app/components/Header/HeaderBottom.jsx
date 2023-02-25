import React from 'react'
import { RiArrowDropDownFill } from "react-icons/ri"
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiOutlineSearch } from "react-icons/ai"
import Link from "next/link"
import Image from 'next/image'
import Menu from './Menu'

export default function HeaderBottom() {
    return (
        <div className='bg-secondary  h-16 text-main flex items-center'>
            <div className='container px-6 h-full flex items-center justify-between'>
                <Menu />
                <ul className='hidden lg:flex h-full items-center justify-center gap-4'>
                    <li className='hover:text-primary h-full flex items-center cursor-pointer group relative'>
                        <Link href="/#" className='flex items-center justify-center gap-2' >NEWS <RiArrowDropDownFill className='scale-150' /></Link>
                        <ul
                            className='z-10 border  rounded-xl w-36 border-solid border-primary group-hover:flex hover:flex flex-col gap-3 hidden absolute top-16 -left-5  bg-main text-secondary p-2'>
                            <li className='hover:underline'>CHELSEA WOMEN </li>
                            <li className='hover:underline'>LOAN WATCH</li>
                            <li className='hover:underline'>TRANSFERS</li>
                        </ul>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>SQUAD</li>
                    <li className='hover:text-primary h-full flex items-center cursor-pointer group relative'>
                        <Link href="/#" className='flex items-center justify-center gap-2' >SEASON <RiArrowDropDownFill className='scale-150' /></Link>
                        <ul
                            className='z-10 border rounded-xl w-36 border-solid border-primary group-hover:flex hover:flex flex-col gap-3 hidden absolute top-16 -left-5  bg-main text-secondary p-2'>
                            <li className='hover:underline'>MATCH PREVIEWS</li>
                            <li className='hover:underline'>MATCH REPORTS</li>
                            <li className='hover:underline'>TABLES AND FORM</li>
                            <li className='hover:underline'>STATISTICS</li>
                        </ul>
                    </li>
                    <li className='hover:text-primary cursor-pointer'>FEATURES</li>
                    <li className='hover:text-primary cursor-pointer'>MATCHDAY</li>
                    <li className='hover:text-primary cursor-pointer'>FORUM</li>
                    <li className='hover:text-primary h-full flex items-center cursor-pointer group relative'>
                        <Link href="/#" className='flex items-center justify-center gap-2' >THE SITE <RiArrowDropDownFill className='scale-150' /></Link>
                        <ul
                            className='z-10 border rounded-xl w-36 border-solid border-primary group-hover:flex hover:flex flex-col gap-3 hidden absolute top-16 -left-5  bg-main text-secondary p-2'>
                            <li className='hover:underline'>ABOUT</li>
                            <li className='hover:underline'>CONTACT</li>
                            <li className='hover:underline'>AUTHORS</li>
                        </ul>
                    </li>
                </ul>
                <Image
                    className='cursor-pointer hover:animate-pulse lg:hidden'
                    width={40}
                    height={40}
                    src="https://www.talkchelsea.net/wp-content/uploads/2022/07/talk-chelsea-logo-1.png"
                />
                <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center gap-1 lg:gap-2'>
                        <AiFillFacebook className='hover:text-primary cursor-pointer text-lg' />
                        <AiFillTwitterSquare className='hover:text-primary cursor-pointer text-lg' />
                        <AiFillInstagram className='hover:text-primary cursor-pointer text-lg' />
                    </div>
                    <AiOutlineSearch className='hover:text-primary cursor-pointer hidden lg:block' />
                </div>
            </div>
        </div>
    )
}
