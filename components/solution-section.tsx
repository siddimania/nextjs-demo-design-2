import React from "react";
import { Star, Users, Download } from "lucide-react";
import Image from "next/image";

const SolutionSection = () => {
  return (
    <section
      id="solution-section"
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-indigo-50 via-white to-white px-4 pt-10 md:px-6 lg:pt-20 lg:pb-20"
    >
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-0 lg:grid-cols-2 lg:gap-12">
        {/* Content Side */}
        <div className="space-y-4 lg:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold tracking-wide text-purple-600 uppercase md:text-base">
            The Solution
          </div>

          {/* Main Heading */}
          <h1 className="text-brand-heading text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Helping developers to build websites in minutes instead of days with
            a fully customizable CMS
          </h1>

          {/* Subtitle */}
          <p className="text-sm font-semibold text-gray-500 md:text-base">
            And supported by a vibrant open source community!
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3 lg:pt-8">
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

        {/* Image Side - Hidden on md and below, positioned absolutely on lg+ */}
        <div className="absolute right-40 bottom-0 hidden lg:block">
          <Image
            src="/solution/content_management.png"
            alt="alt"
            width={700}
            height={800}
          />
        </div>

        {/* Image Side - Visible on md and below, positioned normally in grid */}
        <div className="flex justify-center overflow-hidden lg:hidden">
          <div className="translate-y-10 transform">
            <Image
              src="/solution/content_management.png"
              alt="alt"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
