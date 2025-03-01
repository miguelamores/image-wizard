// import { route } from "@fal-ai/serverless-proxy/nextjs";

// export const { GET, POST } = route;

// import OpenAI from "openai";
// const openai = new OpenAI();

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { prompt } = body;
//     const response = await openai.images.generate({
//       model: "dall-e-2",
//       prompt: prompt,
//       n: 1,
//       size: "1024x1024",
//     });
//     const image = response.data[0].url;
//     const imageJson = response.data[0].b64_json;
//     console.log(body);
//     return Response.json({ image, imageJson });
//   } catch (error) {
//     console.error(error.error);
//     return new Response(`Error: ${error.error}`, {
//       status: 400,
//       statusText: error.error.message,
//     });
//   }
// }
