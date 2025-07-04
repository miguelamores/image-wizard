"use client";

import { useTransition } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteImage } from "@/lib/actions/image.actions";

import { Button } from "../ui/button";

export const DeleteConfirmation = ({ imageId }: { imageId: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-full">
        <Button
          type="button"
          variant="destructive"
          className="h-11 w-full rounded-xl"
        >
          Delete Image
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-md rounded-2xl border-0 bg-white/95 backdrop-blur-sm shadow-2xl">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="text-xl font-bold text-gray-800 mb-4">
            Are you sure you want to delete this image?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 text-base">
            This will permanently delete this image and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex gap-3 mt-6">
          <AlertDialogCancel className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 rounded-lg py-3 font-medium">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 border-0 rounded-lg py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() =>
              startTransition(async () => {
                await deleteImage(imageId);
              })
            }
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
