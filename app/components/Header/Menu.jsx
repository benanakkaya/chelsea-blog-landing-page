"use client"
import React, { useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi"
import { RiArrowDropDownFill } from "react-icons/ri"
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"

export default function Menu() {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <BiMenuAltLeft onClick={() => setMenuVisible(true)} className='hover:text-primary text-3xl cursor-pointer' />
            {menuVisible === true &&
                <div className="fixed bottom-0 inset-x-0 px-4 pb-4 inset-0 flex items-center justify-center z-20" >
                    <div onClick={() => setMenuVisible(false)} className="fixed cursor-pointer inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-black opacity-75"></div>
                    </div>
                    <div className='z-20 w-64 text-white bg-primary absolute border border-primary min-h-screen top-0 left-0 flex flex-col justify-between gap-8 p-6'>

                        <div className='flex flex-col gap-12'>
                            <svg onClick={() => setMenuVisible(!menuVisible)} className='cursor-pointer' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path className='fill-white' d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>

                            <ul className='flex flex-col gap-2 text-lg'>
                                <li className='group hover:border-b-2 cursor-pointer flex flex-col font-bold gap-3'>
                                    <div className='w-full flex items-center justify-between'>News <RiArrowDropDownFill className='scale-150' /> </div>
                                    <ul className='group-hover:flex flex-col text-sm hidden pl-4 gap-1'>
                                        <li>► Chelsea Women</li>
                                        <li>► Loan Watch</li>
                                        <li>► Transfers</li>
                                    </ul>
                                </li>
                                <li className='hover:border-b-2 cursor-pointer flex items-center justify-start font-bold'>Squad</li>
                                <li className='group hover:border-b-2 cursor-pointer flex flex-col font-bold gap-3'>
                                    <div className='w-full flex items-center justify-between'>Season <RiArrowDropDownFill className='scale-150' /> </div>
                                    <ul className='group-hover:flex flex-col text-sm hidden pl-4 gap-1'>
                                        <li>► Match Previews</li>
                                        <li>► Match Reports</li>
                                        <li>► Tables and Form</li>
                                        <li>► Statistics</li>
                                    </ul>
                                </li>
                                <li className='hover:border-b-2 cursor-pointer flex items-center justify-start font-bold'>Features</li>
                                <li className='hover:border-b-2 cursor-pointer flex items-center justify-start font-bold'>Matchday</li>
                                <li className='hover:border-b-2 cursor-pointer flex items-center justify-start font-bold'>Forum</li>
                                <li className='group hover:border-b-2 cursor-pointer flex flex-col font-bold gap-3'>
                                    <div className='w-full flex items-center justify-between'>The Site <RiArrowDropDownFill className='scale-150' /> </div>
                                    <ul className='group-hover:flex flex-col text-sm hidden pl-4 gap-1'>
                                        <li>► About</li>
                                        <li>► Contact</li>
                                        <li>► Authors</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className='flex items-center justify-center gap-1 lg:gap-2'>
                            <AiFillFacebook className='hover:scale-125 cursor-pointer text-xl' />
                            <AiFillTwitterSquare className='hover:scale-125 cursor-pointer text-xl' />
                            <AiFillInstagram className='hover:scale-125 cursor-pointer text-xl' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
