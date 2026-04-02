import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#03A63C] text-[#261008]">
      <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col items-center gap-6">

        
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-[#F2E205]">About</a>
          <a href="#" className="hover:text-[#F2E205]">Blog</a>
          <a href="#" className="hover:text-[#F2E205]">Jobs</a>
          <a href="#" className="hover:text-[#F2E205]">Press</a>
          <a href="#" className="hover:text-[#F2E205]">Accessibility</a>
          <a href="#" className="hover:text-[#F2E205]">Partners</a>
        </nav>

        
        <div className="flex gap-6 text-lg">
          <FaFacebook className="hover:text-[#F2E205]"/>
          <FaInstagram className="hover:text-[#F2E205] cursor-pointer" />
          <FaXTwitter className="hover:text-[#F2E205] cursor-pointer" />
          <FaGithub className="hover:text-[#F2E205] cursor-pointer" />
          <FaYoutube className="hover:text-[#F2E205] cursor-pointer" />
        </div>

       
        <p className="text-xs text-[#261008] text-center">
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
