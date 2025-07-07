import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SearchParams {
  page?: string;
  query?: string;
}

interface PageProps {
  searchParams: Promise<SearchParams>;
}

const Home = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 lg:text-6xl">
              Unleash Your Creative Vision with Image Wizard
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
              Transform, enhance, and create stunning images with the power of
              AI. From restoration to generative fills, bring your visual ideas
              to life.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {navLinks.slice(1, 7).map((link, index) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className="group p-3! relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-2 shadow-md hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {getFeatureDescription(link.label)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </section>

      {/* Collection Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16! md:py-24 w-full flex flex-col items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
        <div className="mb-12! text-center max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 lg:text-4xl">
            Discover Amazing Creations
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Explore the latest transformations and get inspired by what&apos;s
            possible with AI-powered image editing.
          </p>
        </div>

        <div className="max-w-7xl w-full">
          <Collection
            hasSearch
            images={images?.data}
            totalPages={images?.totalPage}
            page={page}
          />
        </div>
      </section>
    </>
  );
};

// Helper function to get feature descriptions
function getFeatureDescription(label: string): string {
  const descriptions = {
    "Image Restore":
      "Bring old photos back to life with AI-powered restoration",
    "Generative Fill": "Complete missing parts of images intelligently",
    "Object Remove": "Seamlessly remove unwanted objects from photos",
    "Object Recolor": "Change colors while maintaining natural appearance",
    "Background Remove": "Extract subjects with precision and clarity",
  };
  return (
    descriptions[label as keyof typeof descriptions] ||
    "Transform your images with AI"
  );
}

export default Home;
