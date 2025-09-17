import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerSections = [
    {
      title: "PRODUCT",
      links: [
        "Strapi 5",
        "Strapi Design System",
        "Why Strapi?",
        "Content Architecture",
        "Features",
        "Enterprise Edition",
        "Roadmap",
        "Support",
        "Try live demo",
        "Changelog",
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        "Static websites",
        "Mobile applications",
        "Corporate websites",
        "Editorial sites",
        "Ecommerce",
        "For developers",
        "For content teams",
        "For business teams",
      ],
    },
    {
      title: "RESOURCES",
      links: [
        "Resource Center",
        "How to get started",
        "Meet the community",
        "Tutorials",
        "API documentation",
        "GitHub repository",
        "Starters",
        "User stories",
        "Strapi vs Wordpress",
        "Strapi vs Contentful",
        "Headless CMS guide",
      ],
    },
    {
      title: "INTEGRATIONS",
      links: [
        "All integrations",
        "React CMS",
        "Next.js CMS",
        "Tanstack CMS",
        "Vue.js CMS",
        "Nuxt.js CMS",
        "Astro CMS",
        "Flutter CMS",
        "Svelte CMS",
        "React Native CMS",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About us",
        "Blog",
        "Handbook",
        "Careers",
        "Partner Program",
        "Contact",
        "FAQ",
        "Newsroom",
        "Goodies shop",
      ],
    },
  ];

  return (
    <section className="bg-white px-4 pt-20 pb-15 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className="mb-4 flex items-center space-x-2">
              {/* Placeholder for Strapi logo */}
              <Image
                src="/brand/brand_logo.png"
                alt="brand_logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-gray-900">strapi</span>
            </div>
            <p className="text-xs text-gray-600">
              Strapi is the leading open-source Headless CMS. Strapi gives
              developers the freedom to use their favorite tools and frameworks
              while allowing editors to easily manage their content and
              distribute it anywhere.
            </p>
            {/* Placeholder for additional image */}
            <div className="mt-6">
              <Image
                src="/footer/soc.png"
                alt="author_image"
                width={52}
                height={52}
              />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h3 className="mb-4 text-sm font-normal text-gray-900 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-xs font-normal text-gray-600 transition-colors duration-200 hover:text-indigo-600"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 flex flex-wrap items-center space-x-3 md:mb-0">
              <a
                href="#"
                className="text-xs text-gray-600 transition-colors hover:text-indigo-600"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-600 transition-colors hover:text-indigo-600"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs text-gray-600 transition-colors hover:text-indigo-600"
              >
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">
                © 2025 Strapi SAAS. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
