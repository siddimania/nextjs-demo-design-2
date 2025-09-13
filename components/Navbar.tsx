import React from "react";
import { GitGraph } from "lucide-react";
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

const Navbar = () => {
  return (
    <nav className="bg-brand-background-blue flex justify-center px-4 md:px-6">
      <div className="w-full max-w-7xl pt-5 pb-3">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-button-blue rounded p-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
                <span className="text-brand-button-blue text-sm font-bold">
                  S
                </span>
              </div>
            </div>
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
          <div className="flex items-center space-x-3">
            {/* Contact Sales */}
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/80">
              Contact Sales
            </button>

            {/* Get Started */}
            <button className="bg-brand-button-blue hover:bg-brand-button-blue/80 cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
