import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" relative mt-auto w-full py-10 px-4 sm:px-6 lg:px-16 mx-auto bg-[url('/assets/gas.jpeg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white opacity-90"></div>
      {/* Grid */}
      <div className="max-w-[85rem] mx-auto">
        <div className="flex items-center flex-col md:flex-row md:justify-between gap-5 relative z-10">
          <div>
            <Link className="focus:outline-none " href="/" aria-label="Brand">
              <Image
                alt="logo"
                src={"/assets/Logo.png"}
                width={135}
                height={135}
              />
            </Link>
          </div>
          {/* End Col */}
          <ul className="flex flex-col items-center md:flex-row gap-4 ">
            <li className=" ">
              <Link
                className="text-color font-bold hover:text-gray-800 focus:outline-none focus:text-gray-800  "
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className="text-color font-bold hover:text-gray-800 focus:outline-none focus:text-gray-800  "
                href="/about"
              >
                About us
              </Link>
            </li>
            <li className="">
              <Link
                className="text-color font-bold hover:text-gray-800 focus:outline-none focus:text-gray-800  "
                href="/contact"
              >
                Contact us
              </Link>
            </li>
            <li className="">
              <Link
                className="text-color font-bold hover:text-gray-800  "
                href=""
              >
                Download profile
              </Link>
            </li>
          </ul>
          {/* End Col */}
          {/* Social Brands */}
          <div className="md:text-end">
            {/* facebook */}
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-color hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12.7404C22 7.18377 17.5229 2.67926 12 2.67926C6.47715 2.67926 2 7.18377 2 12.7404C2 17.7621 5.65684 21.9245 10.4375 22.6793V15.6487H7.89844V12.7404H10.4375V10.5238C10.4375 8.00222 11.9305 6.60938 14.2146 6.60938C15.3088 6.60938 16.4531 6.80589 16.4531 6.80589V9.28187H15.1922C13.95 9.28187 13.5625 10.0575 13.5625 10.8532V12.7404H16.3359L15.8926 15.6487H13.5625V22.6793C18.3432 21.9245 22 17.7623 22 12.7404Z"
                  fill="#2A2B6A"
                />
              </svg>
            </a>

            {/* instagram */}
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-color hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3.67926H8C5.23858 3.67926 3 5.91784 3 8.67926V16.6793C3 19.4407 5.23858 21.6793 8 21.6793H16C18.7614 21.6793 21 19.4407 21 16.6793V8.67926C21 5.91784 18.7614 3.67926 16 3.67926ZM19.25 16.6793C19.2445 18.4719 17.7926 19.9238 16 19.9293H8C6.20735 19.9238 4.75549 18.4719 4.75 16.6793V8.67926C4.75549 6.88661 6.20735 5.43475 8 5.42926H16C17.7926 5.43475 19.2445 6.88661 19.25 8.67926V16.6793ZM16.75 8.92926C17.3023 8.92926 17.75 8.48154 17.75 7.92926C17.75 7.37698 17.3023 6.92926 16.75 6.92926C16.1977 6.92926 15.75 7.37698 15.75 7.92926C15.75 8.48154 16.1977 8.92926 16.75 8.92926ZM12 8.17926C9.51472 8.17926 7.5 10.194 7.5 12.6793C7.5 15.1646 9.51472 17.1793 12 17.1793C14.4853 17.1793 16.5 15.1646 16.5 12.6793C16.5027 11.485 16.0294 10.3388 15.1849 9.49434C14.3404 8.64985 13.1943 8.1766 12 8.17926ZM9.25 12.6793C9.25 14.1981 10.4812 15.4293 12 15.4293C13.5188 15.4293 14.75 14.1981 14.75 12.6793C14.75 11.1605 13.5188 9.92926 12 9.92926C10.4812 9.92926 9.25 11.1605 9.25 12.6793Z"
                  fill="#2A2B6A"
                />
              </svg>
            </a>
            {/* twitter  X*/}
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-color hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1761 4.67926H19.9362L13.9061 11.4567L21 20.6793H15.4456L11.0951 15.0859L6.11723 20.6793H3.35544L9.80517 13.4301L3 4.67926H8.69545L12.6279 9.79188L17.1761 4.67926ZM16.2073 19.0547H17.7368L7.86441 6.21854H6.2232L16.2073 19.0547Z"
                  fill="#2A2B6A"
                />
              </svg>
            </a>
            {/* Linkedin */}
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-color hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.5 3.67926C3.67157 3.67926 3 4.35083 3 5.17926V20.1793C3 21.0077 3.67157 21.6793 4.5 21.6793H19.5C20.3284 21.6793 21 21.0077 21 20.1793V5.17926C21 4.35083 20.3284 3.67926 19.5 3.67926H4.5ZM8.52076 7.68198C8.52639 8.63823 7.81061 9.22745 6.96123 9.22323C6.16107 9.21901 5.46357 8.58198 5.46779 7.68339C5.47201 6.83823 6.13998 6.15901 7.00764 6.1787C7.88795 6.19839 8.52639 6.84386 8.52076 7.68198ZM12.2797 10.441H9.75971H9.7583V19.0009H12.4217V18.8012C12.4217 18.4213 12.4214 18.0413 12.4211 17.6612C12.4203 16.6474 12.4194 15.6325 12.4246 14.619C12.426 14.3729 12.4372 14.117 12.5005 13.8821C12.7381 13.0046 13.5271 12.4379 14.4074 12.5772C14.9727 12.6657 15.3467 12.9934 15.5042 13.5264C15.6013 13.8596 15.6449 14.2182 15.6491 14.5656C15.6605 15.6132 15.6589 16.6608 15.6573 17.7085C15.6567 18.0783 15.6561 18.4483 15.6561 18.8181V18.9995H18.328V18.7942C18.328 18.3422 18.3278 17.8903 18.3275 17.4384C18.327 16.3089 18.3264 15.1794 18.3294 14.0495C18.3308 13.539 18.276 13.0356 18.1508 12.542C17.9638 11.8079 17.5771 11.2004 16.9485 10.7617C16.5027 10.4495 16.0133 10.2484 15.4663 10.2259C15.404 10.2233 15.3412 10.2199 15.2781 10.2165C14.9984 10.2014 14.7141 10.186 14.4467 10.2399C13.6817 10.3932 13.0096 10.7434 12.5019 11.3607C12.4429 11.4315 12.3852 11.5034 12.2991 11.6107L12.2797 11.635V10.441ZM5.68164 19.0037H8.33242V10.4466H5.68164V19.0037Z"
                  fill="#2A2B6A"
                />
              </svg>
            </a>
          </div>
          {/* End Social Brands */}
        </div>
        {/* End Grid */}
        <hr className="mt-2 border-t-2 border-gray-800" />

        <div className="flex flex-col justify-center items-center md:flex-row gap-4 mt-4 mx-auto max-w-4xl relative z-10">
          <span className="text-sm text-color hidden sm:block">
            © 2024 Arc Synergy Limited. All rights reserved.
          </span>
          <span className="underline text-sm text-color">Privacy Policy</span>
          <span className="underline text-sm text-color">Terms of Service</span>
          <span className="underline text-sm text-color">Cookies Settings</span>
          <span className="text-sm text-color sm:hidden">
            © 2024 Arc Synergy Limited. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
