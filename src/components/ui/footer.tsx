import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const footerLinks = [
    { href: "https://github.com/JoeG21", label: "GitHub" },
    { href: "https://www.linkedin.com/in/joe-c-gomez/", label: "LinkedIn" },
    { href: "https://www.hackerrank.com/profile/jcggomez", label: "HackerRank" },
    { href: "https://leetcode.com/u/gmzj/", label: "LeetCode" },
]

export default function Footer() {
    return (
        <>
            <section id="contact">
                <footer className="border-t border-[#F2F4F3] text-[#CCC5B9] text-xl mt-16 py-8">
                    <div className='mx-4 sm:mx-16'>

                        <div className='w-[4rem]'>
                            <Image
                                src="/joe.svg"
                                alt="Profile Pic"
                                layout="responsive"
                                width={50}
                                height={100}
                                className='bg-[#F2F4F3] rounded-full mb-4'
                            />
                            <span>
                                Contact:
                                <a href="mailto:jcggomez@live.com" className="font-bold ml-2 text-blue-500 hover:underline">
                                    jcggomez@live.com
                                </a>
                            </span>
                        </div>


                        <div className="grid grid-cols-2 gap-y-4 mt-12">
                            {footerLinks.map((link) => (
                                <span key={link.href}>
                                    <Link href={link.href} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-[#F2F4F3]">
                                        {link.label}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}
