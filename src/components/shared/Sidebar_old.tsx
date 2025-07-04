"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-72 hidden lg:block bg-white/95 backdrop-blur-xl border-r border-gray-200 shadow-xl">
      <div className="flex h-full flex-col gap-6 p-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Image
              alt="Image Wizard"
              src="/assets/images/logo.svg"
              width={40}
              height={40}
              className="brightness-0 invert"
            />
          </div>
          <div className="ml-3">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Image Wizard
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              AI-Powered Editing
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1">
          <SignedIn>
            {/* Main Navigation */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Transform
              </h3>
              <ul data-testid="nav-links" className="space-y-1">
                {navLinks.slice(0, 7).map((link, index) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route}>
                      <Link
                        href={link.route}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        data-testid="sidebar-link"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-white/20"
                              : "bg-gray-100 dark:bg-gray-700 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/20"
                          }`}
                        >
                          <Image
                            src={link.icon}
                            alt={link.label}
                            width={20}
                            height={20}
                            className={`transition-all duration-200 ${
                              isActive
                                ? "brightness-0 invert"
                                : "group-hover:scale-110"
                            }`}
                          />
                        </div>
                        <span
                          className={`font-medium transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {link.label}
                        </span>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm" />
                        )}

                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* User Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
                Account
              </h3>
              <ul data-testid="user-links" className="space-y-1">
                {navLinks.slice(7).map((link, index) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route}>
                      <Link
                        href={link.route}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-white/20"
                              : "bg-gray-100 dark:bg-gray-700 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/20"
                          }`}
                        >
                          <Image
                            src={link.icon}
                            alt={link.label}
                            width={20}
                            height={20}
                            className={`transition-all duration-200 ${
                              isActive
                                ? "brightness-0 invert"
                                : "group-hover:scale-110"
                            }`}
                          />
                        </div>
                        <span
                          className={`font-medium transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {link.label}
                        </span>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm" />
                        )}

                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
                      </Link>
                    </li>
                  );
                })}

                {/* User Button */}
                <li className="mt-6 p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <UserButton
                      afterSignOutUrl="/"
                      showName
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-10 h-10",
                          userButtonOuterIdentifier:
                            "text-gray-700 dark:text-gray-300 font-medium",
                        },
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </SignedIn>

          <SignedOut>
            <div className="p-4">
              <Button
                asChild
                className="btn-primary w-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link
                  href="/sign-in"
                  className="flex items-center justify-center gap-2"
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
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Get Started
                </Link>
              </Button>
            </div>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
