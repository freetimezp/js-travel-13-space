import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdCall, MdMessage } from 'react-icons/md';

function Footer() {
    return (
        <div className="bg-gray-800 text-white px-5 relative z-50">
            <section className="max-w-[1200px] mx-auto text-white">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify
                            mb-3">
                            Be Ready To Grow
                        </h1>
                        <p>
                            Get Exclusive <span className="font-bold text-sky-300">Update </span>
                            straigt to your inbox.
                        </p>
                        <br />
                        <div className="flex items-center h-10">
                            <input type="text" className="py-1 px-3 w-full h-[100%] inline-block 
                            focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500
                            bg-gray-800 border-gray-200 border-2 mr-2" placeholder="Email" />
                            <button className="primary-btn">
                                OK
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Quick Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Quick Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Contact US
                                </h1>
                            </div>
                            <div className='space-y-3'>
                                <div className='flex items-center gap-2'>
                                    <HiLocationMarker />
                                    <p>
                                        ZpCity, Ukraine
                                    </p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <MdMessage />
                                    <p>
                                        email@email.com
                                    </p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <MdCall />
                                    <p>
                                        +12 345 67890
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <div className='flex items-center justify-between py-6 border-t-2 border-gray-400'>
                        <span className='text-sm text-gray-400'>
                            sopyright &copy; 2024 by SomeOne
                        </span>
                        <div className='flex items-center gap-x-2'>
                            <a href="#"><FaInstagram className='text-2xl shadow-lg' /></a>
                            <a href="#"><FaFacebook className='text-2xl shadow-lg' /></a>
                            <a href="#"><FaLinkedin className='text-2xl shadow-lg' /></a>
                        </div>
                        <span className='text-sm text-gray-400'>
                            <ul className='flex items-center gap-x-4'>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Conditions</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
