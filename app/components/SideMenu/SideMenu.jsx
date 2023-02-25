import Link from 'next/link'
import React from 'react';
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedinIn , FaTiktok } from "react-icons/fa";

export default function SideMenu() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <h5 className='text-xl text-gray-400 font-bold'>Follow Us</h5>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-facebook'>
                        <FaFacebookF/>
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-twitter'>
                        <FaTwitter/>
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-instagram'>
                        <FaInstagram/>
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-youtube'>
                        <FaYoutube/>
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-linkedin'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='flex items-center text-3xl cursor-pointer hover:opacity-70 transition-opacity duration-200 text-white w-16 h-16 md:w-20 md:h-20  lg:w-28 lg:h-28 rounded-lg justify-center bg-tiktok'>
                        <FaTiktok/>
                    </div>
                </div>
            </div>
        </div>
    )
}
