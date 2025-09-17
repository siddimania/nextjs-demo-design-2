"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navbar/navigation-menu";
import ProductNavbarContent from "./ui/navbar/product-content";
import SolutionNavbarContent from "./ui/navbar/solution-content";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-brand-background-blue flex justify-center px-4 sm:px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-7xl pt-5 pb-3">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/brand/brand_logo.png"
                alt="brand_logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold text-white">strapi</span>
            </div>

            {/* Navigation Menu */}
            <div className="hidden items-center space-x-1 lg:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black data-[state=open]:bg-white">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ProductNavbarContent />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black data-[state=open]:bg-white">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <SolutionNavbarContent />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black data-[state=open]:bg-white">
                      Developers
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ProductNavbarContent />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink className="bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black data-[state=open]:bg-white">
                      Docs
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink className="bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black data-[state=open]:bg-white">
                      Pricing
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black data-[state=open]:bg-white">
                      Cloud
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ProductNavbarContent />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side Actions */}
            <div className="hidden items-center space-x-3 lg:flex">
              {/* Contact Sales */}
              <button className="cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/80">
                Contact Sales
              </button>

              {/* Get Started */}
              <button className="bg-brand-button-blue hover:bg-brand-button-blue/80 cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-white">
                Get Started
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <div className="block lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded-md p-2 text-white hover:bg-white/10"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="bg-brand-background-blue fixed top-0 right-0 h-full w-80 transform shadow-xl transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/brand/brand_logo.png"
                    alt="brand_logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <span className="text-xl font-semibold text-white">
                    strapi
                  </span>
                </div>
                <button
                  onClick={toggleMobileMenu}
                  className="rounded-md p-2 text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-4">
                <div className="border-b border-white/20 pb-4">
                  <button className="w-full rounded-md px-3 py-3 text-left font-semibold text-white hover:bg-white/10">
                    Product
                  </button>
                  <button className="w-full rounded-md px-3 py-3 text-left font-semibold text-white hover:bg-white/10">
                    Solutions
                  </button>
                  <button className="w-full rounded-md px-3 py-3 text-left font-semibold text-white hover:bg-white/10">
                    Developers
                  </button>
                  <button className="w-full rounded-md px-3 py-3 text-left font-semibold text-white hover:bg-white/10">
                    Docs
                  </button>
                  <button className="w-full rounded-md px-3 py-3 text-left font-semibold text-white hover:bg-white/10">
                    Pricing
                  </button>
                  <button className="w-full rounded-md px-3 py-3 text-left font-semibold text-white hover:bg-white/10">
                    Cloud
                  </button>
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-3 pt-4">
                  <button className="w-full rounded-md bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/80">
                    Contact Sales
                  </button>
                  <button className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600/80">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
