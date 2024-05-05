import Link from "next/link"
import Image from "next/image"

export const logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image 
                    src="/logo.png" 
                    alt="logo"
                    height={30}
                    width={30} 
                    />
            </div>
        </Link>
    )
}