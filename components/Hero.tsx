"use client";
import React from "react";
import { Check, Copy } from "lucide-react";
import HeroSubsection from "./video-section";

const Hero = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx create-strapi-app@latest");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      id="hero"
      className="bg-brand-background-blue relative flex justify-center overflow-hidden pb-10"
    >
      <div className="max-w-[1400px] px-4 sm:px-4 md:px-6 lg:px-8">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 hidden opacity-10 md:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='0.25' y='0.25' width='71.5' height='71.5' stroke='%234945FF' stroke-width='0.5'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 hidden h-20 w-20 rotate-12 rounded-lg bg-purple-500/15 md:block"></div>
        <div className="absolute top-20 right-20 hidden h-16 w-16 rounded-full bg-indigo-500/30 md:block"></div>
        <div className="absolute bottom-32 left-20 hidden h-12 w-12 -rotate-12 rounded-lg bg-purple-400/25 md:block"></div>
        <div className="absolute top-1/3 left-1/4 hidden h-8 w-8 rounded-full bg-indigo-400/20 md:block"></div>
        <div className="absolute right-1/4 bottom-1/4 hidden h-6 w-6 rotate-45 rounded-lg bg-purple-500/20 md:block"></div>

        {/* Announcement Banner */}
        <div className="relative z-10 pt-5 md:pt-10 lg:pt-15">
          <div className="flex justify-center">
            <div className="font-poppins inline-flex items-center gap-3 rounded-md border border-gray-500/30 px-6 py-3 text-xs backdrop-blur-sm md:text-sm lg:text-base">
              <span className="rounded bg-purple-500 px-2 py-0.5 text-xs font-semibold tracking-wide text-white uppercase">
                NEW
              </span>
              <span className="font-semibold text-white">
                Check out everything Strapi launched at StrapiConf.
              </span>
              <button className="font-semibold text-purple-500">
                Watch keynote →
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mt-10 flex flex-col items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Main Heading */}
            <h1 className="text-1xl leading-tight font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Build modern websites with the <br /> most customizable Headless
              CMS
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-4 max-w-4xl text-xs font-normal text-gray-400 md:mt-8 md:text-sm md:font-semibold lg:text-base">
              The open-source Headless CMS for developers that makes API
              creation easy, and supports your favorite frameworks. Customize
              and host your projects in the cloud or on your own servers.
            </p>

            {/* Command Line */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex min-w-0 items-center rounded-lg border border-slate-600/50 bg-slate-800/80 px-6 py-2 text-lg text-gray-200 backdrop-blur-sm">
                <span className="font-cascadia_code mr-2 text-purple-400">
                  $
                </span>
                <span className="font-cascadia_code flex-1 text-xs font-medium md:text-sm lg:text-base">
                  npx create-strapi-app@latest
                </span>
                <button
                  onClick={handleCopy}
                  className="group ml-4 rounded-md p-2 transition-colors duration-200 hover:bg-slate-700/50"
                  aria-label="Copy command"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-green-400" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 flex items-center justify-center">
              <div className="h-px max-w-xs flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              <span className="font-poppins mx-4 text-base font-semibold tracking-wide text-gray-500 uppercase">
                OR
              </span>
              <div className="h-px max-w-xs flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-brand-button-blue min-w-3xs transform rounded-lg px-10 py-2 text-xs font-normal text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 sm:text-sm md:text-sm md:font-semibold lg:text-base">
                Start your demo
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap justify-start gap-4 text-xs font-semibold sm:text-sm md:mt-15 md:items-center md:justify-center md:gap-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>Open source (MIT)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>SOC 2 certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="h-5 w-5 text-green-400" />
                <span>GDPR compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div> */}
      </div>
    </section>
  );
};

export default Hero;
