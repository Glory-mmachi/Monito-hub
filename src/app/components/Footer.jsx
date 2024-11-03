"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductHero() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    setErrorMessage("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail(""); // Clear input field after submission
    }, 2000);
  };

  return (
    <section className="bg-[#FCEED5] rounded-t-[40px]">
      <div className="md:px-24 px-4 py-10 flex flex-col gap-[40px]">
        {/* Input section */}
        <div>
          <section>
            <div className="max-w-[1080px] mx-auto h-auto md:h-auto flex flex-col md:flex-row justify-between items-center rounded-[20px] bg-[#003459] px-6 md:px-8 py-6 gap-6 md:gap-0">
              <p className="text-[20px] md:text-[24px] font-[700] text-white mb-4 md:mb-0 text-center md:text-left">
                Register now so you don&apos;t miss our programs
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row justify-start items-center bg-white rounded-[14px] p-2 md:p-3 gap-[12px] w-full md:w-auto"
              >
                <input
                  aria-label="Email input"
                  className={`w-full md:w-[350px] lg:w-[450px] h-[48px] px-4 outline outline-gray-400 rounded-[8px] text-center md:text-left transition focus:outline-[#003459] ${
                    submitted && "animate-pulse"
                  }`}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className={`bg-[#003459] text-[16px] text-white px-4 py-2 rounded-[14px] w-full md:w-auto hover:bg-[#005b99] transition duration-300 ${
                    submitted && "animate-bounce"
                  }`}
                  aria-label="Subscribe Now"
                >
                  {submitted ? "Subscribed!" : "Subscribe Now"}
                </button>
              </form>

              {errorMessage && (
                <p className="text-red-500 mt-2 text-center md:text-left animate-pulse">
                  {errorMessage}
                </p>
              )}
            </div>
          </section>
        </div>

        {/* Links section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <ul className="hidden md:flex custom:gap-7 md:gap-[60px] font-[500] text-[16px] text-[#00171F]">
            <li>
              <Link href="/" className="hover:text-[#003459] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#003459] transition-all">
                Category
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#003459] transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-[#003459] transition-all">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social icons */}
          <ul className="flex gap-6 md:gap-10 justify-center md:justify-start">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Facebook.jpg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-slate-600 w-full"></div>

        {/* Footer section with added microinteractions */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#667479] gap-6 md:gap-0 text-center md:text-left">
          <p className="text-[14px] font-[500] hover:underline transition-all duration-200 hover:text-[#003459]">
            © 2022 Monito. All rights reserved.
          </p>

          <div className="hover:scale-105 transition-transform duration-200">
            <Image src="/Frame.svg" alt="logo" width={115} height={40} />
          </div>

          <p className="text-[14px] font-[500] hover:text-[#003459] transition-all duration-200">
            Terms of Service
            <span className="pl-2 hover:text-[#003459] transition-all duration-200">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
