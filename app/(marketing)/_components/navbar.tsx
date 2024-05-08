import { Logo } from "@/components/logo"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl ms-auto flex items-center w-full justify-between">
                <Logo />
            </div>
        </div>
    )
}