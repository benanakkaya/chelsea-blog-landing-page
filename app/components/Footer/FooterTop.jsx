import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function FooterTop() {
    return (
        <div className='bg-primary text-white flex flex-col items-center justify-center p-6 gap-3'>
            <div className='flex items-center justify-center gap-6 font-bold text-4xl'>
                <FaFacebookF className='cursor-pointer hover:text-secondary transition-colors duration-200' />
                <FaTwitter className='cursor-pointer hover:text-secondary transition-colors duration-200' />
                <FaInstagram className='cursor-pointer hover:text-secondary transition-colors duration-200' />
                <FaTiktok className='cursor-pointer hover:text-secondary transition-colors duration-200' />
                <FaLinkedinIn className='cursor-pointer hover:text-secondary transition-colors duration-200' />
            </div>
            <div className='flex items-center justify-center flex-wrap gap-3'>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">ABOUT</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">ADVERTISING</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">CONTACT</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">NEWSLETTER</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">COOKIE</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">POLICY</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">PRIVACY</Link>
                <Link className="text-xs uppercase hover:text-secondary transition-colors duration-200" href="/#">POLICY</Link>
            </div>
        </div>
    )
}
