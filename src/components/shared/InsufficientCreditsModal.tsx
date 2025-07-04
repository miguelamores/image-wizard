"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="max-w-md rounded-2xl border-0 bg-white/95 backdrop-blur-sm shadow-2xl">
        <AlertDialogHeader>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Insufficient Credits
            </p>
            <AlertDialogCancel
              className="border-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => router.push("/profile")}
            >
              <Image
                src="/assets/icons/close.svg"
                alt="close"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </AlertDialogCancel>
          </div>

          <div className="flex justify-center mb-6">
            <Image
              src="/assets/images/stacked-coins.png"
              alt="credit coins"
              width={300}
              height={80}
              className="object-contain"
            />
          </div>

          <AlertDialogTitle className="text-2xl font-bold text-gray-800 text-center mb-4">
            Oops.... Looks like you&apos;ve run out of free credits!
          </AlertDialogTitle>

          <AlertDialogDescription className="text-gray-600 text-center text-base leading-relaxed">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-3 mt-6">
          <AlertDialogCancel
            className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 rounded-lg py-3 font-medium transition-all duration-300"
            onClick={() => router.push("/profile")}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 border-0 rounded-lg py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => router.push("/credits")}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
