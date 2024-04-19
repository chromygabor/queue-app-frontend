
import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


export interface IHeaderProps { };

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    return <Navbar fluid rounded>
        <NavbarBrand as={Link} href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Queue App</span>
        </NavbarBrand>
        <div className="flex md:order-2">
            <div className="px-6 sm:px-0 max-w-sm">
                <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign in with Google<div></div></button>
            </div>
            <NavbarToggle />
        </div>
        <NavbarCollapse>
        </NavbarCollapse>
    </Navbar>;
};

export default Header;

