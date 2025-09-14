import { Code, Puzzle, Users } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="bg-gray-50 py-30 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center mb-16 gap-4">
          <p className="text-purple-500 font-semibold text-sm uppercase tracking-wide">
            THE PROBLEM
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-heading leading-tight">
            Building your website the<br />
            way you want is hard
          </h1>
          <p className="text-gray-500 text-base font-semibold max-w-2xl mx-auto">
            because your CMS is slowing you down and holding you back.
          </p>
        </div>

        {/* Problem Items */}
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl mx-auto">
          {/* Lack of Customization */}
          <div className="flex-1 px-4 py-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-3">
              Lack of customization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You're unable to customize or extend the CMS to fit your unique project needs.
            </p>
          </div>

          {/* Separator - Vertical on md/lg, Horizontal on smaller screens */}
          <div className="w-full h-px bg-gray-300 my-8 md:hidden"></div>
          <div className="hidden md:block w-0.5 bg-gray-300 h-40 self-start mt-5 mx-5"></div>

          {/* Lack of Plugins */}
          <div className="flex-1 px-4 py-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Puzzle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-3">
              Lack of plugins
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You are not able to use your favorite tools, and lack plugins or integrations.
            </p>
          </div>

          {/* Separator - Vertical on md/lg, Horizontal on smaller screens */}
          <div className="w-full h-px bg-gray-300 my-8 md:hidden"></div>
          <div className="hidden md:block w-0.5 bg-gray-300 h-40 self-start mt-5 mx-5"></div>

          {/* Lack of Community */}
          <div className="flex-1 px-4 py-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-3">
              Lack of community
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You're dealing with a CMS that lacks a large, active community of developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}