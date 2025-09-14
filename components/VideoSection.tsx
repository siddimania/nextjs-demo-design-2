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
    {
      name: "Orion Health",
      icon: "/video/orion_health_logo.svg",
      type: "image",
    },
    { name: "Toyota", icon: "/video/toyota.svg", type: "image" },
    { name: "Engie", icon: "/video/Logo_engie.svg", type: "image" },
    { name: "Walmart", icon: "/video/walmart.svg", type: "image" },
    { name: "Delivery Hero", icon: "/video/Delivery.svg", type: "image" },
    { name: "NASA", icon: "/video/NASA_NB.svg", type: "image" },
    {
      name: "Société Générale",
      icon: "/video/societe_generale.svg",
      type: "image",
    },
    { name: "Accenture", icon: "/video/Accenture.svg", type: "image" },
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
            width={950}
            height={800}
            className="rounded-sm ring-2 ring-gray-600/40"
          />
        </div>

        {/* Company Logos Section */}
        <div className="pt-5 pb-25">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-8">
              {companies.map((company, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <Image
                      src={company.icon as string}
                      alt={company.name}
                      width={32}
                      height={32}
                      className="mb-2 h-20 w-20 text-white"
                    />
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
