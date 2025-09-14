"use client";
import React from "react";
import { Check, Copy } from "lucide-react";
import HeroSubsection from "./VideoSection";


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
      className="flex bg-brand-background-blue relative pb-10 overflow-hidden justify-center"
    >
      <div className="px-4 md:px-6 max-w-[1400px]">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='0.25' y='0.25' width='71.5' height='71.5' stroke='%234945FF' stroke-width='0.5'/%3e%3c/svg%3e")`,
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 h-20 w-20 rotate-12 rounded-lg bg-purple-500/15"></div>
        <div className="absolute top-20 right-20 h-16 w-16 rounded-full bg-indigo-500/30"></div>
        <div className="absolute bottom-32 left-20 h-12 w-12 -rotate-12 rounded-lg bg-purple-400/25"></div>
        <div className="absolute top-1/3 left-1/4 h-8 w-8 rounded-full bg-indigo-400/20"></div>
        <div className="absolute right-1/4 bottom-1/4 h-6 w-6 rotate-45 rounded-lg bg-purple-500/20"></div>

        {/* Announcement Banner */}
        <div className="relative z-10 pt-15">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-md border border-gray-500/30 px-6 py-3 text-sm backdrop-blur-sm font-poppins">
              <span className="rounded bg-purple-500 px-2 py-0.5 text-xs font-semibold tracking-wide text-white uppercase">
                NEW
              </span>
              <span className="text-white font-semibold">
                Check out everything Strapi launched at StrapiConf.
              </span>
              <button className="text-purple-300 font-semibold transition-colors duration-200 hover:text-purple-200">
                Watch the keynote →
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex mt-10 flex-col items-center justify-center px-4 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Main Heading */}
            <h1 className="text-4xl leading-tight font-bold text-white md:text-5xl font-poppins">
              Build modern websites with the <br/> most customizable Headless CMS
            </h1>

            {/* Subheading */}
            <p className="mx-auto max-w-4xl mt-5 font-semibold text-gray-400 text-sm md:text-md lg:text-lg font-poppins">
              The open-source Headless CMS for developers that makes API
              creation easy, and supports your favorite frameworks. Customize
              and host your projects in the cloud or on your own servers.
            </p>

            {/* Command Line */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex min-w-0 items-center rounded-lg border border-slate-600/50 bg-slate-800/80 px-6 py-2 text-lg text-gray-200 backdrop-blur-sm">
                <span className="mr-2 text-purple-400 font-source_code_pro">$</span>
                <span className="flex-1 font-medium font-source_code_pro">npx create-strapi-app@latest</span>
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
              <span className="mx-4 text-base font-semibold tracking-wide text-gray-500 uppercase font-poppins">
                OR
              </span>
              <div className="h-px max-w-xs flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-brand-button-blue text-md min-w-3xs transform rounded-lg px-10 py-2 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25">
                Start your demo
              </button>
            </div>

            {/* Features */}
            <div className="mt-15 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold font-poppins">
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
