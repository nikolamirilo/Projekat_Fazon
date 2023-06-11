import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      id="kontakt"
      className="flex py-6 flex-col lg:flex-row md:flex-col sm:flex-col justify-around items-center bg-green-600 w-full"
    >
      <div
        id="main-info"
        className="flex flex-row gap-4 justify-around items-center mb-4"
      >
        <h2 className="text-white text-2xl font-bold">Projekat "Fazon"</h2>
        <img
          className="cursor-pointer w-8 sm:w-auto"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div
          id="contact"
          className="flex flex-row gap-4 justify-around items-center"
        >
          <Link href="/">
            <AiFillInstagram size={30} className="text-white" />
          </Link>
          <Link href="/">
            <AiFillFacebook size={30} className="text-white" />
          </Link>
          <Link href="/">
            <AiFillMessage size={30} className="text-white" />
          </Link>
        </div>
        <div id="copyright" className="text-white text-lg">
          Copyright © Projekat "Fazon" 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
