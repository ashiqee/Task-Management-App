import React from 'react';
import { FaDribbble, FaGithub } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (

        <>
            <footer className="relative mt-20 bg-blueGray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
                                <div className="flex space-x-4">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter size={24} className="text-blue-400 hover:text-blue-300" />
                                    </a>
                                    <a href="https://www.facebook.com/ashik.mahamud" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={24} className="text-blue-500 hover:text-blue-400" />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={24} className="text-pink-400 hover:text-pink-300" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ashiqee" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={24} className="text-blue-600 hover:text-blue-500" />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to='/aboutUs'> <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" >About Us</a></Link>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/ashiqee">Github</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://ashik-mahmud.web.app/">Portfoliio</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">MIT License</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <hr className="my-6 border-blueGray-300"> */}

                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023</span>
                                <span className='ml-1 text-blue-600'>Ashik Mahmud</span>

                            </div>
                        </div>
                    </div>


                </div>
            </footer>
        </>
    );
};

export default Footer;
