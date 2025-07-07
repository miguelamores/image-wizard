"use client";

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}: TransformedImageProps) => {
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300">
          Transformed
        </h3>

        {hasDownload && (
          <button
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 p-3 shadow-lg hover:shadow-xl"
            onClick={downloadHandler}
          >
            <Image
              src="/assets/icons/download.svg"
              alt="Download"
              width={20}
              height={20}
              className="filter brightness-0 invert"
            />
          </button>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/50">
          <CldImage
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt={image.title || "transformed image"}
            sizes={"(max-width: 767px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="w-full h-auto object-cover"
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)();
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500/80 to-teal-600/80 backdrop-blur-sm">
              <Image
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
                className="animate-spin"
              />
              <p className="text-white font-medium mt-4">Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[300px] rounded-2xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-white text-gray-500 text-lg font-medium">
          Transformed Image
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
