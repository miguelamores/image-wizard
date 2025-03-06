"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import { fal } from "@fal-ai/client";
import { useState } from "react";
import Image from "next/image";
import { addImage } from "@/lib/actions/image.actions";

fal.config({
  proxyUrl: "/api/generation",
});

export const schema = z.object({
  prompt: z.string().min(1, "Prompt is required"),
});

type ImageObjType = {
  url: string;
  height: number;
  width: number;
} | null;

interface Props {
  userId: string;
  creditBalance: number;
}

type Result = {
  images: Array<ImageObjType>;
};

const CreationForm = ({ userId, creditBalance }: Props) => {
  const [isSubmitting, setSubmit] = useState(false);
  const [image, setImage] = useState<ImageObjType>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof schema>) => {
    console.log({ value });
    const { prompt } = value;
    setImage(null);
    setSubmit(true);
    try {
      const result: Result = await fal.subscribe("fal-ai/flux/dev", {
        input: {
          prompt,
        },
        logs: true,
        onQueueUpdate: update => {
          if (update.status === "IN_PROGRESS") {
            update.logs.map(log => log.message).forEach(console.log);
          }
        },
      });
      console.log(result);
      const imageObj = result.images[0];
      const imageUrl = imageObj?.url as string;
      setImage(imageObj);

      const imageData = {
        title: prompt,
        publicId: imageUrl,
        transformationType: "generate",
        width: imageObj?.width || 200,
        height: imageObj?.height || 200,
        config: { generate: { prompt } } as Transformations,
        secureURL: imageUrl,
        transformationURL: imageUrl,
        aspectRatio: "16/9",
        prompt: prompt,
        color: undefined,
      };

      const newImage = await addImage({
        image: imageData,
        userId,
        path: "/",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Prompt</FormLabel>
              <FormControl data-testid="prompt">
                <Input {...field} className="input-field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          role="submit"
          type="submit"
          className="submit-button capitalize"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Generating image..." : "Generate Image"}
        </Button>
      </form>
      {image && (
        <Image
          src={image.url}
          alt="Generated Image"
          className="h-auto w-auto"
          width={image.width}
          height={image.height}
        />
      )}
    </Form>
  );
};

export default CreationForm;
