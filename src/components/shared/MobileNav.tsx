"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/20 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Image
              alt="Image Wizard"
              src="/assets/images/logo.svg"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Image Wizard
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                },
              }}
            />

            <Sheet>
              <SheetTrigger className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>

              <SheetContent className="glass-dark backdrop-blur-xl border-l border-white/20 w-80">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8 p-4 border-b border-white/10">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                      <Image
                        alt="Image Wizard"
                        src="/assets/images/logo.svg"
                        width={24}
                        height={24}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">
                        Image Wizard
                      </h2>
                      <p className="text-sm text-gray-400">
                        AI-Powered Editing
                      </p>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="mb-6">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">
                        Transform
                      </h3>
                      <ul className="space-y-1 px-2">
                        {navLinks.slice(0, 7).map((link, index) => {
                          const isActive = link.route === pathname;
                          return (
                            <li key={link.route}>
                              <Link
                                href={link.route}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                  isActive
                                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                              >
                                <div
                                  className={`p-2 rounded-lg transition-all duration-200 ${
                                    isActive
                                      ? "bg-white/20"
                                      : "bg-gray-700 hover:bg-indigo-900/20"
                                  }`}
                                >
                                  <Image
                                    src={link.icon}
                                    alt={link.label}
                                    width={18}
                                    height={18}
                                    className={`transition-all duration-200 ${
                                      isActive ? "brightness-0 invert" : ""
                                    }`}
                                  />
                                </div>
                                <span className="font-medium">
                                  {link.label}
                                </span>

                                {/* Active indicator */}
                                {isActive && (
                                  <div className="ml-auto w-2 h-2 bg-white rounded-full shadow-sm" />
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* User Links */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-4">
                        Account
                      </h3>
                      <ul className="space-y-1 px-2">
                        {navLinks.slice(7).map((link, index) => {
                          const isActive = link.route === pathname;
                          return (
                            <li key={link.route}>
                              <Link
                                href={link.route}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                  isActive
                                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                                }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                              >
                                <div
                                  className={`p-2 rounded-lg transition-all duration-200 ${
                                    isActive
                                      ? "bg-white/20"
                                      : "bg-gray-700 hover:bg-indigo-900/20"
                                  }`}
                                >
                                  <Image
                                    src={link.icon}
                                    alt={link.label}
                                    width={18}
                                    height={18}
                                    className={`transition-all duration-200 ${
                                      isActive ? "brightness-0 invert" : ""
                                    }`}
                                  />
                                </div>
                                <span className="font-medium">
                                  {link.label}
                                </span>

                                {/* Active indicator */}
                                {isActive && (
                                  <div className="ml-auto w-2 h-2 bg-white rounded-full shadow-sm" />
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </SignedIn>

          <SignedOut>
            <Button asChild className="btn-primary shadow-lg">
              <Link href="/sign-in" className="flex items-center gap-2">
                Get Started
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

export default MobileNav;
