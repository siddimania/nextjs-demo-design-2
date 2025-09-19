import {
  Code2,
  Layers,
  Settings,
  BarChart3,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section
      id="features-section"
      className="flex flex-col items-center justify-center gap-10 px-4 py-4 sm:py-8 md:gap-20 md:px-6 lg:py-16"
    >
      <div className="flex w-full max-w-6xl flex-col items-center rounded-lg border">
        {/* Top Section */}
        <div className="relative container mx-auto border-b bg-indigo-50 px-5 py-8 sm:px-10 md:py-16 lg:px-20 lg:py-24">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Content */}
            <div className="space-y-8 lg:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                <Code2 size={16} />
                Create APIs
              </div>

              <h1 className="text-brand-heading text-2xl leading-tight font-bold lg:text-4xl">
                Simplify API Creation Content Modeling Delivery
              </h1>

              <p className="max-w-2xl text-base text-gray-600">
                Build and manage your content model and infrastructure with the
                Content-Type Builder and Custom Fields. Skip tedious setup.
                Design content structures and relations in a no-code UI. Deliver
                content efficiently with our REST and GraphQL APIs. Ensure your
                content is structured and accessible.
              </p>

              <button className="bg-brand-button-blue hover:bg-brand-button-blue/80 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:shadow-xl">
                Learn more
              </button>
            </div>
          </div>
          {/* Image Placeholder */}
          {/* Image Side */}
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/features/create_api.png"
              alt="alt"
              width={500}
              height={600}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-5 py-10 sm:px-10 lg:px-20 lg:py-15">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Content Type Builder */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Settings size={20} className="text-indigo-600" />
                Content Type Builder
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-600">
                Create and manage content models through a user-friendly
                interface, simplifying the development process.
              </p>
            </div>

            {/* Dynamic Zones */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Layers size={20} className="text-purple-600" />
                Dynamic Zones
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-600">
                Give editors the flexibility to quickly adjust web pages
                structure, without the help of developers.
              </p>
            </div>

            {/* Custom Fields */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Code2 size={20} className="text-emerald-600" />
                Custom Fields
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-600">
                Add any type of fields to your project, customizing data
                structures to suit your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center rounded-lg border">
        {/* Top Section */}
        <div className="relative container mx-auto border-b bg-indigo-50 px-5 py-8 sm:px-10 md:py-16 lg:px-20 lg:py-24">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            {/* Content */}
            <div className="space-y-8 lg:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                <BarChart3 size={16} />
                Customization
              </div>

              <h1 className="text-brand-heading text-2xl leading-tight font-bold lg:text-4xl">
                Customize your CMS and work with your favorite tools frameworks
              </h1>

              <p className="max-w-2xl text-base text-gray-600">
                Tailor your CMS to meet specific project needs and leverage a
                thriving marketplace of plugins and integrations. Strapi helps
                you future-proof your modern website with features like unique
                field types and custom layouts.
              </p>

              <button className="bg-brand-button-blue hover:bg-brand-button-blue/80 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors duration-200 hover:shadow-xl">
                Explore the Marketplace
              </button>
            </div>
          </div>
          {/* Image Placeholder */}
          {/* Image Side */}
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <Image
              src="/features/customization.png"
              alt="alt"
              width={500}
              height={600}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-5 py-10 sm:px-10 lg:px-20 lg:py-15">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Content Type Builder */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Shield size={20} className="text-indigo-600" />
                Reviewed and Tested Plugins
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-600">
                Leverage a thriving marketplace of plugins and integrations
                developed by an active developer community.
              </p>
            </div>

            {/* Dynamic Zones */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Layers size={20} className="text-purple-600" />
                Design System
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-600">
                Build plugins fast with a complete design system to create a
                consistent experience for all users.
              </p>
            </div>

            {/* Custom Fields */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
                <Users size={20} className="text-emerald-600" />
                Developer Community
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-600">
                Tap into a vibrant community of thousands of developers. If you
                need help with an edge case or a simple bug, our active
                community is ready to support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
