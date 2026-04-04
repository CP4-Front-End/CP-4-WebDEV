import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#03A63C] text-[#261008]">
      <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col items-center gap-6">

        <p className="font-semibold text-lg">
          Confira nossas redes sociais!
        </p>

        <div className="flex gap-6">

          <a href="https://facebook.com" target="blank"
            className="text-2xl p-3 rounded-md hover:bg-[#F2E205] hover:text-[#261008] transition">
            <FaFacebook />
          </a>

          <a href="https://instagram.com" target="blank"
            className="text-2xl p-3 rounded-md hover:bg-[#F2E205] hover:text-[#261008] transition">
            <FaInstagram />
          </a>

          <a href="https://twitter.com" target="blank"
            className="text-2xl p-3 rounded-md hover:bg-[#F2E205] hover:text-[#261008] transition">
            <FaXTwitter />
          </a>

          <a href="https://github.com" target="blank"
            className="text-2xl p-3 rounded-md hover:bg-[#F2E205] hover:text-[#261008] transition">
            <FaGithub />
          </a>

          <a href="https://youtube.com" target="blank"
            className="text-2xl p-3 rounded-md hover:bg-[#F2E205] hover:text-[#261008] transition">
            <FaYoutube />
          </a>

        </div>

        <p className="text-xs text-center">
          © 2024 Academia Inteligente, Inc. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
