import React from "react";
import { Star, Users, Download } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-t from-purple-100 via-white to-white py-16 px-4 md:px-6">
      <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Content Side */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium tracking-wide text-purple-600 uppercase">
            The Solution
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl leading-tight font-bold text-slate-800 lg:text-5xl">
            Helping developers to build websites in minutes instead of days with
            a fully customizable CMS
          </h1>

          {/* Subtitle */}
          <p className="text-xl leading-relaxed text-slate-600">
            And supported by a vibrant open source community!
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
            {/* GitHub Stars */}
            <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex justify-center">
                <div className="rounded-xl bg-purple-100 p-3">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600">66k</div>
              <div className="text-sm font-medium text-slate-500">
                GitHub stars
              </div>
            </div>

            {/* Active Developers */}
            <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex justify-center">
                <div className="rounded-xl bg-purple-100 p-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600">72K</div>
              <div className="text-sm font-medium text-slate-500">
                Active developers
              </div>
            </div>

            {/* Downloads */}
            <div className="space-y-4 rounded-xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex justify-center">
                <div className="rounded-xl bg-purple-100 p-3">
                  <Download className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600">50M</div>
              <div className="text-sm font-medium text-slate-500">
                Downloads
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Placeholder for hero image */}
            <div className="flex h-96 w-96 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-200 to-blue-200 shadow-2xl">
              <div className="space-y-4 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white">
                  <div className="h-8 w-8 rounded-lg bg-purple-600"></div>
                </div>
                <div className="font-medium text-slate-600">
                  Hero Image Placeholder
                </div>
                <div className="text-sm text-slate-500">
                  Replace with your hero image
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-purple-200 opacity-50 blur-xl"></div>
            <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-blue-200 opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
