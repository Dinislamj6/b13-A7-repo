 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    const links = <>
       <li><Link className={pathName === '/' ? 'text-primary' : ''} href="/">Home</Link></li>
       <li><Link className={pathName === "/about" ? 'text-primary' : ''} href="/about">About</Link></li>
       <li><Link className={pathName === "/contact/support" ? 'text-primary border-b' : ''} href="/contact/support">Contact</Link></li>
      
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Keen Keeper</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    {links}
                </div>
            </div>
        </div>
    );
};

export default NavBar;