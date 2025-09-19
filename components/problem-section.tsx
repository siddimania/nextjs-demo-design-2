import { Code, Puzzle, Users } from "lucide-react";

export default function ProblemSection() {
  return (
    <section
      id="problem-section"
      className="bg-gray-50 px-4 py-10 md:px-6 md:py-20 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 text-center md:mb-16">
          <p className="text-sm font-semibold tracking-wide text-purple-600 uppercase md:text-base">
            THE PROBLEM
          </p>
          <h1 className="text-brand-heading text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Building your website the
            <br />
            way you want is hard
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-semibold text-gray-500 md:text-base">
            because your CMS is slowing you down and holding you back.
          </p>
        </div>

        {/* Problem Items */}
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-center md:flex-row">
          {/* Lack of Customization */}
          <div className="flex-1 px-4 py-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Code className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-brand-heading mb-3 text-xl font-semibold">
              Lack of customization
            </h3>
            <p className="leading-relaxed text-gray-600">
              You're unable to customize or extend the CMS to fit your unique
              project needs.
            </p>
          </div>

          {/* Separator - Vertical on md/lg, Horizontal on smaller screens */}
          <div className="my-8 h-px w-full bg-gray-300 md:hidden"></div>
          <div className="mx-5 mt-5 hidden h-48 w-0.5 self-start bg-gray-300 md:block lg:h-40"></div>

          {/* Lack of Plugins */}
          <div className="flex-1 px-4 py-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Puzzle className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-brand-heading mb-3 text-xl font-semibold">
              Lack of plugins
            </h3>
            <p className="leading-relaxed text-gray-600">
              You are not able to use your favorite tools, and lack plugins or
              integrations.
            </p>
          </div>

          {/* Separator - Vertical on md/lg, Horizontal on smaller screens */}
          <div className="my-8 h-px w-full bg-gray-300 md:hidden"></div>
          <div className="mx-5 mt-5 hidden h-48 w-0.5 self-start bg-gray-300 md:block lg:h-40"></div>

          {/* Lack of Community */}
          <div className="flex-1 px-4 py-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-brand-heading mb-3 text-xl font-semibold">
              Lack of community
            </h3>
            <p className="leading-relaxed text-gray-600">
              You're dealing with a CMS that lacks a large, active community of
              developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
