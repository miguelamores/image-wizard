"use client";

import { headerNavLinks, navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-center z-50 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Image
                alt="Image Wizard"
                src="/assets/images/logo.svg"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Image Wizard
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <SignedIn>
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-slate-700">
                {headerNavLinks.map(link => {
                  const isActive = link.route === pathname;
                  return (
                    <Link
                      key={link.route}
                      href={link.route}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={16}
                        height={16}
                        className={`transition-all duration-200 ${
                          isActive ? "brightness-0 invert" : ""
                        }`}
                      />
                      <span className="text-sm font-medium hidden lg:block">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}

                {/* Dark Mode Toggle */}
                <DarkModeToggle />

                <div className="ml-2">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                      },
                    }}
                  />
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex items-center gap-2">
                {/* Dark Mode Toggle */}
                <DarkModeToggle />

                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/sign-in" className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                      />
                    </svg>
                    Get Started
                  </Link>
                </Button>
              </div>
            </SignedOut>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <SignedIn>
                {/* Main Navigation */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3">
                    Transform
                  </h3>
                  {navLinks.slice(0, 7).map(link => {
                    const isActive = link.route === pathname;
                    return (
                      <Link
                        key={link.route}
                        href={link.route}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={`transition-all duration-200 ${
                            isActive ? "brightness-0 invert" : ""
                          }`}
                        />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* User Section */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3">
                    Account
                  </h3>
                  {navLinks.slice(7).map(link => {
                    const isActive = link.route === pathname;
                    return (
                      <Link
                        key={link.route}
                        href={link.route}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={`transition-all duration-200 ${
                            isActive ? "brightness-0 invert" : ""
                          }`}
                        />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    );
                  })}

                  {/* User Button */}
                  <div className="mt-4 p-3 border-t border-gray-200 dark:border-slate-700">
                    <UserButton
                      afterSignOutUrl="/"
                      showName
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-8 h-8",
                          userButtonOuterIdentifier:
                            "text-gray-700 font-medium",
                        },
                      }}
                    />
                  </div>
                </div>
              </SignedIn>

              <SignedOut>
                <div className="p-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link
                      href="/sign-in"
                      className="flex items-center justify-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                        />
                      </svg>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
