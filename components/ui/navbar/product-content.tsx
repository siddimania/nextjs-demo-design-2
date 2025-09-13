import {
  Building,
  CloudIcon,
  FileText,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Users,
  Zap,
  Code,
  MessageCircle,
  Play,
  Upload,
} from "lucide-react";

const ProductNavbarContent = () => {
  return (
    <div className="w-[800px] rounded-lg bg-white p-8 shadow-lg">
      <div className="grid grid-cols-3 gap-8">
        {/* CAPABILITIES */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            CAPABILITIES
          </h3>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Code className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Create APIs</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Design REST and GraphQL Content Delivery APIs to connect to any
                frontend.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Settings className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Customization</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Personalize your CMS to meet your project's unique requirements.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Server className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Hosting</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Host your projects on robust, secure servers in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <div className="mt-10 space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Content Management
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Craft experiences and easily manage editing, publishing, and
                translation.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Collaboration</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Work together easily on code and content.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Shield className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Security</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Implement robust security measures to protect your information.
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT & FEATURES */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-wide text-gray-400 uppercase">
            PRODUCT & FEATURES
          </h3>
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <CloudIcon className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Cloud</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                PaaS hosting for Strapi projects.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Building className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">
                  Enterprise Edition
                </h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                A self hosted, Enterprise-ready Edition.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <ShoppingCart className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Strapi Market</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Marketplace of plugins and integrations.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100">
                  <Zap className="h-4 w-4 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Features</h4>
              </div>
              <p className="ml-11 text-sm text-gray-600">
                Discover all the features available in Strapi today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Items */}
      <div className="mt-12 flex items-center space-x-8 border-t border-gray-200 pt-6">
        <div className="flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-gray-900">
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">Contact Sales</span>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-gray-900">
          <Play className="h-4 w-4" />
          <span className="text-sm">Interactive Demo</span>
        </div>
        <div className="flex cursor-pointer items-center space-x-2 text-gray-600 hover:text-gray-900">
          <Upload className="h-4 w-4" />
          <span className="text-sm">Host your Project</span>
        </div>
      </div>
    </div>
  );
};

export default ProductNavbarContent;
