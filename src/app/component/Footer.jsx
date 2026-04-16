import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";


const Footer = () => {
    return (
        <div className="bg-[#244D3F] mt-10">
            <footer className="footer footer-horizontal footer-center text-primary-content p-10">
                <aside>
                    <h2 className="font-bold text-5xl">Keen Keeper</h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </aside>
                <nav>
                    <p className="font-bold text-xl">Social Links</p>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                          <SlSocialInstagram />
                        </a>
                        <a>
                            <FaSquareYoutube />
                        </a>
                        <a>
                           <FaSquareXTwitter />
                        </a>
                    </div>
                </nav>


                   <div className="border border-t-1 border-gray-300 w-full">
                   </div>
                <div className="flex justify-between flex-col md:flex-row w-full">
                  
                    <div>
                         <p>© 2026 KeenKeeper. All rights reserved.</p>
                    </div>

                    <div className="flex">
                        <p>Privacy Policy</p>
                        <p> Terms of Service</p>
                        <p> Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;