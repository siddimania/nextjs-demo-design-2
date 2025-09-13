import {
  ShoppingBag,
  Smartphone,
  Globe,
  Code,
  Edit3,
  Monitor,
  CreditCard,
  Briefcase,
  Gamepad2,
  MessageCircle,
  Play,
  Upload,
} from "lucide-react";

const SolutionNavbarContent = () => {
  return (
    <div className="w-[800px] rounded-lg bg-white p-8 shadow-lg">
      <div className="grid grid-cols-3 gap-8">
        {/* USE CASES */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            USE CASES
          </h3>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                  <ShoppingBag className="h-4 w-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Ecommerce</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Level up your eCommerce experiences
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Smartphone className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Mobile applications
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                One CMS, any devices.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Globe className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Corporate site</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Manage your brand narrative.
              </p>
            </div>
          </div>
        </div>

        {/* TEAMS */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            TEAMS
          </h3>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Code className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Developers</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Integrate Strapi with your favorite tools
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                  <Edit3 className="h-4 w-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Content Managers
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Manage Content Autonomously
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Monitor className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Website agencies
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Unlock the benefit of structured content
              </p>
            </div>
          </div>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            INDUSTRIES
          </h3>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Financial Services
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Build trustful relations with your customers
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                  <Briefcase className="h-4 w-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Tech and Business Services
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Stand out with exceptional B2B content.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Gamepad2 className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Telco, Media, and Gaming
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Create and manage content on any platform
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SolutionNavbarContent;