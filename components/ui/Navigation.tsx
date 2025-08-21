import Image from "next/image";
import { AlignJustify } from 'lucide-react';
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="px-5 md:px-10 lg:px-[6rem] pt-[1.7rem]">
            {/* Inner Black Container */}
            <div className="w-full bg-black rounded-lg md:rounded-2xl flex justify-between items-center px-4 md:px-10 lg:px-28 py-4">
                {/* Logo */}
                <Image src="/assets/logo/logo.png" alt="Logo" width={100} height={100} />

                {/* Large SCreen List */}
                <ul className="hidden lg:flex items-center gap-4 text-[#f6e9e9]">
                    <Link href={'/'}>
                        <li>What is KlipAi</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Send KlapAI</li>
                    </Link>
                    <Link href={'/'}>
                        <li>AI Agent</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Testimonials</li>
                    </Link>
                    <Link href={'/'}>
                        <li>Web3</li>
                    </Link>
                </ul>

                {/* Large Screen Button */}
                <div>
                    <button className="hidden md:block px-8 py-3 bg-[#12ed39] rounded-full font-[600] cursor-pointer">
                        Login
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <AlignJustify className="text-white  text-lg" />
                </div>
            </div>
        </nav>
    )
}
