"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdBarChart, MdWatchLater } from "react-icons/md";

const NavBar = () => {
    const pathName = usePathname();
    console.log(pathName);
    const isActive = (path) => pathName === path

    const links = <>

        <Link href={"/"} >
            <button className={`btn border-none font-semibold ${isActive("/") ? "bg-[#244D3F] text-white" : "text-[#64748B] "}`}><IoMdHome />
                Home</button>
        </Link>
        <Link href={"/timeline"} >
            <button className={`btn border-none font-semibold ${isActive("/timeline") ? "bg-[#244D3F] text-white" : "text-[#64748B] "}`}><MdWatchLater />
                Timeline</button>
        </Link>
        <Link href={"/stats"} >
            <button className={`btn border-none font-semibold ${isActive("/stats") ? "bg-[#244D3F] text-white" : "text-[#64748B] "}`}><FaChartLine />
                Stats</button>
        </Link>
    </>
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="md:navbar-start flex">
                      <a className=" text-[#1F2937]  text-xl font-semibold"><span className="font-bold text-2xl">Keen</span> Keeper</a>
                     <div className="dropdown ml-[180px]">

                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 ml-[-40px] p-2 gap-2 shadow">
                            {links}
                        </ul>
                    </div>
                  
                </div>
                <div className="navbar-end hidden lg:flex gap-5">
                    {links}
                </div>
            </div>
        </div>
    );
};

export default NavBar;