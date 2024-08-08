import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className=" text-white" >
      <div className="container mx-auto py-12 px-6" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          <div className="space-y-8">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto" data-aos="flip-right">
              <img
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
            <p className="text-center md:text-left" data-aos="flip-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut aspernatur a temporibus fugit, illum
              soluta, animi quos, id reiciendis voluptatum? Placeat, dolores vitae. Reprehenderit nostrum doloremque
              ad esse pariatur!
            </p>
          </div>
          <div className="space-y-4 md:ml-6 lg:ml-0" data-aos="flip-right">
            <div className="font-bold text-xl">Contact</div>
            <div className="text-xl">Phone no. 89374254445</div>
            <div className="text-xl">Mail: info@gmail.com</div>
            <div className="text-xl">No.58 A, East Madison</div>
            <div className="text-xl">Working hours: 8</div>
          </div>
          <div className="space-y-4 md:ml-6 lg:ml-0" data-aos="flip-left">
            <div className="font-bold text-xl">Services</div>
            <div className="text-xl">Branding & identity</div>
            <div className="text-xl">Web design and development</div>
            <div className="text-xl">Mobile Development</div>
            <div className="text-xl">UI & UX Designing</div>
            <div className="text-xl">Digital Marketing</div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-start">
          <ul className="flex flex-wrap gap-4 mb-4 md:mb-0 cursor-pointer">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
          <li><Link to="/contact-Us" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
          <div className="flex gap-4 md:ml-auto cursor-pointer">
            <FaLinkedin className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaFacebook className="text-2xl" />
          </div>
          {/* <div className="mt-4 md:mt-0 md:text-center text-center">
            <p className="text-sm ml-[200px]">&copy; Ntechzy All Rights Reserved.</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
