import { Code2, Layers, Settings, BarChart3, Shield, Users} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="flex flex-col gap-10 md:gap-20 items-center justify-center px-4 py-16 md:px-6"
    >
      
      <div className="flex w-full max-w-6xl flex-col items-center rounded-lg border">
        {/* Top Section */}
        <div className="container mx-auto border-b bg-indigo-50 px-20 py-16 lg:py-24">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Content */}
            <div className="space-y-8 lg:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                <Code2 size={16} />
                Create APIs
              </div>

              <h1 className="text-2xl leading-tight font-bold text-gray-900 lg:text-4xl">
                Simplify API Creation,{" "}
                <span className="text-indigo-600">Content Modeling</span>, and{" "}
                <span className="text-purple-600">Delivery</span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Build and manage your content model and infrastructure with the
                Content-Type Builder and Custom Fields. Skip tedious setup.
                Design content structures and relations in a no-code UI. Deliver
                content efficiently with our REST and GraphQL APIs. Ensure your
                content is structured and accessible.
              </p>

              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700 hover:shadow-xl">
                Learn more
                <Code2 size={20} />
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-8 shadow-2xl">
                <div className="rounded-xl bg-white p-6 shadow-inner">
                  <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 lg:h-80">
                    <div className="space-y-2 text-center">
                      <Code2 size={48} className="mx-auto text-gray-400" />
                      <p className="font-medium text-gray-500">
                        API Dashboard Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-10 py-10 md:px-20 lg:py-15">
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
      <div className="container mx-auto border-b bg-indigo-50 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="space-y-8 lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              <BarChart3 size={16} />
              Customization
            </div>

            <h1 className="text-2xl leading-tight font-bold text-gray-900 lg:text-4xl">
              Customize your CMS and work with your{" "}
              <span className="text-indigo-600">favorite tools</span> and{" "}
              <span className="text-purple-600">frameworks</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Tailor your CMS to meet specific project needs and leverage a 
              thriving marketplace of plugins and integrations. Strapi helps 
              you future-proof your modern website with features like unique 
              field types and custom layouts.
            </p>

            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-indigo-700 hover:shadow-xl">
              Explore the Marketplace
              <Code2 size={20} />
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-6 shadow-2xl md:p-8">
              <div className="rounded-xl bg-white p-4 shadow-inner md:p-6">
                <div className="flex h-48 w-full items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 md:h-64 lg:h-80">
                  <div className="space-y-2 text-center">
                    <img 
                      src="/api/placeholder/400/300" 
                      alt="card-image" 
                      className="mx-auto rounded-lg shadow-sm"
                      style={{ width: '200px', height: '150px', objectFit: 'cover' }}
                    />
                    <p className="font-medium text-gray-500">
                      CMS Customization Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-10 md:px-12 lg:px-20 lg:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Reviewed and Tested Plugins */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-indigo-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Reviewed and Tested Plugins
              </h3>
            </div>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              Leverage a thriving marketplace of plugins and integrations 
              developed by an active developer community.
            </p>
          </div>

          {/* Design System */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers size={20} className="text-purple-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Design System
              </h3>
            </div>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              Build plugins fast with a comprehensive design system to create 
              a consistent experience for all users.
            </p>
          </div>

          {/* Thriving Developer Community */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Users size={20} className="text-emerald-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Thriving Developer Community
              </h3>
            </div>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              Tap into a vibrant community of thousands of developers. Whether 
              you need help with an edge case or a simple bug, our active 
              community is ready to support and collaborate.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
