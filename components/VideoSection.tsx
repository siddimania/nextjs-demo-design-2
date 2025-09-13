import {
  Star,
  Car,
  Zap,
  ShoppingCart,
  Truck,
  Rocket,
  Users,
  Briefcase,
} from "lucide-react";
import Image from "next/image";

export default function VideoSection() {
  const companies = [
    { name: "Orion Health", icon: Star },
    { name: "Toyota", icon: Car },
    { name: "Engie", icon: Zap },
    { name: "Walmart", icon: ShoppingCart },
    { name: "Delivery Hero", icon: Truck },
    { name: "NASA", icon: Rocket },
    { name: "Société Générale", icon: Users },
    { name: "Accenture", icon: Briefcase },
  ];

  return (
    <section
      id="video"
      className="bg-brand-background-blue flex justify-center"
    >
      <div className="w-full max-w-[1400px] px-4 md:px-6">
        {/* Hero Image Placeholder Section */}
        <div className="flex items-center justify-center py-20">
          <Image
            src="/hero/hero-susection-image.png"
            alt="Hero Subsection Image"
            width={800}
            height={700}
            className="rounded-4xl ring-2 ring-gray-600"
          />
        </div>

        {/* Company Logos Section */}
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-8">
              {companies.map((company, index) => {
                const IconComponent = company.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100"
                  >
                    <IconComponent className="mb-2 h-8 w-8 text-gray-400" />
                    <span className="text-center text-xs font-medium text-gray-400">
                      {company.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
