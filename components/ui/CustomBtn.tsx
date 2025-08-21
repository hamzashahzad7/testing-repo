import Link from "next/link";
import { cn } from "../../lib/utils";
import { ArrowRight } from 'lucide-react';

export default function CustomBtn({ link = '/', content = 'example', extraStyles }: { link?: string, content?: string, extraStyles?: string }) {
    return (
        <Link href={link} className={cn("w-fit px-9 py-4 bg-[#12ed39] rounded-full font-normal flex items-center gap-5 cursor-pointer", extraStyles)}>
            <h2 className="uppercase text-[14px]">
                {content}
            </h2>
            <ArrowRight className="w-4 h-4 lg:w-auto lg:h-auto" />
        </Link>
    )
}