
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import Icon from '../public/logo.png';
import profile from '../public/profile.png';
import Profile from './profile';
import {useSession} from "next-auth/react";

const Navbar = () => {
    const [toggleform, settoggleform] = useState(false);
    const [togglenav, settoggleNav] = useState(true);
    
    return (
        <div className='w-screen sm:mt-2 max-sm:h-32  flex bg-slate-100 p-2 shadow-black shadow-lg'>
            <div className='ml-3 max-sm:mt-3'>
                <Link href={'/'}>
                    <Image src={Icon} width={50} height={50} />
                </Link>
            </div>
            
            <div className={`absolute right-10 space-x-4 text-2xl flex max-sm:hidden ${togglenav?'':'hidden'}`}>
                <div></div>
                {/* <Link href='/subpages/history' className='mt-2'>
                    History
                </Link> */}
                <Link href='/subpages/code' className='mt-2'>
                    Code
                </Link>
                <Link href='/subpages/about' className='mt-2'>
                    About
                </Link>
                <Link href='/subpages/contact' className='mt-2 rounded-lg'>
                    Contact Us
                </Link>
                {/* <Link href={'/subpages/profile'}>
                <Image src={profile} width={50} height={50} className='cursor-pointer' />
                </Link> */}
                {/* <Profile onClick={() => alert('sdf')} /> */}
            </div>
            <div className={`flex ml-5 sm:hidden ${togglenav?'':'hidden'}`}>

                <div className=' grid grid-cols-2 grid-rows-2  text-xl mt-2'>
                    {/* <button onClick={() => console.log("Hello")}>
                    <GiHamburgerMenu />
                </button > */}

                    {/* <Link href='/subpages/history' className='text-center'>
                        History
                    </Link> */}
                    <Link href='/subpages/code' className='text-center'>
                        Code
                    </Link>
                    <Link href='/subpages/about' className='text-center'>
                        About
                    </Link>
                    <Link href='/subpages/contact' className='text-center rounded-lg'>
                    Contact Us
                    </Link>
                </div>
                {/* <Link href={'/subpages/profile'}>
                <Image src={profile} width={50} height={50} className='cursor-pointer h-14 mt-3 ml-5' />
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;
