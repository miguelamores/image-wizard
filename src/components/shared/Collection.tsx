"use client";

import { IImage } from "@/lib/database/models/image.model";
import { useRouter, useSearchParams } from "next/navigation";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import Link from "next/link";
import { transformationTypes } from "@/constants";
import { formUrlQuery } from "@/lib/utils";
import { Search } from "./Search";

export const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex flex-col items-stretch justify-between gap-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl">
            Recent Creations
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mt-2">
            Explore the latest transformations and edits
          </p>
        </div>
        {hasSearch && <Search />}
      </div>

      {/* Content */}
      {images.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <Card image={image} key={image._id as string} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex-center min-h-[400px] flex-col gap-4 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50">
          <div className="p-4 rounded-full bg-gray-200 dark:bg-gray-700">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No images yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Start creating amazing transformations to see them here
            </p>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-12">
          <Pagination>
            <PaginationContent className="flex items-center gap-2">
              <Button
                disabled={Number(page) <= 1}
                className="btn-secondary"
                onClick={() => onPageChange("prev")}
              >
                <PaginationPrevious />
              </Button>

              <div className="flex items-center gap-2 px-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Page
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {page}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  of {totalPages}
                </span>
              </div>

              <Button
                className="btn-secondary"
                onClick={() => onPageChange("next")}
                disabled={Number(page) >= totalPages}
              >
                <PaginationNext />
              </Button>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

const Card = ({ image, index }: { image: IImage; index: number }) => {
  return (
    <Link
      href={`/transformations/${image._id}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="card-elegant overflow-hidden group-hover:scale-105 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          {image.transformationType === "generate" ? (
            <Image
              src={image.publicId}
              alt={image.title}
              width={image.width}
              height={image.height}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            />
          ) : (
            <CldImage
              src={image.publicId}
              alt={image.title}
              width={image.width || 500}
              height={image.height}
              {...image.config}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Transformation Type Badge */}
          <div className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg">
            <Image
              src={`/assets/icons/${
                transformationTypes[
                  image.transformationType as TransformationTypeKey
                ].icon
              }`}
              alt={
                transformationTypes[
                  image.transformationType as TransformationTypeKey
                ].title
              }
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {image.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {
              transformationTypes[
                image.transformationType as TransformationTypeKey
              ].title
            }
          </p>
        </div>
      </div>
    </Link>
  );
};
