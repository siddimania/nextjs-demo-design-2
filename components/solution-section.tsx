import React from "react";
import { Star, Users, Download } from "lucide-react";
import Image from "next/image";

const SolutionSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-t from-indigo-50 via-white to-white px-4 pb-0 pt-10 md:pt-20 md:px-6">
      <div className="relative grid grid-cols-1 w-full max-w-6xl items-center gap-6 lg:gap-12 lg:grid-cols-2">
        {/* Content Side */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold tracking-wide text-purple-600 uppercase md:text-base">
            The Solution
          </div>

          {/* Main Heading */}
          <h1 className="text-brand-heading text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
            Helping developers to build websites in minutes instead of days with
            a fully customizable CMS
          </h1>

          {/* Subtitle */}
          <p className="text-sm font-semibold text-gray-500 md:text-base">
            And supported by a vibrant open source community!
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
            {/* GitHub Stars */}
            <div className="flex flex-col space-y-2 rounded-xl border border-gray-100 bg-white p-6 text-start shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="text-3xl font-bold text-purple-600">66k</div>
              <div className="text-sm font-medium text-slate-500">
                GitHub stars
              </div>
            </div>

            {/* Active Developers */}
            <div className="flex flex-col space-y-2 rounded-xl border border-gray-100 bg-white p-6 text-start shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="text-3xl font-bold text-purple-600">72K</div>
              <div className="text-sm font-medium text-slate-500">
                Active developers
              </div>
            </div>

            {/* Downloads */}
            <div className="flex flex-col space-y-2 rounded-xl border border-gray-100 bg-white p-6 text-start shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="text-3xl font-bold text-purple-600">50M</div>
              <div className="text-sm font-medium text-slate-500">
                Downloads
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="absolute right-40 bottom-0">
          <Image
            src="/solution/content_management.png"
            alt="alt"
            width={700}
            height={800}
            
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
