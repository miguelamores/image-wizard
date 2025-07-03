# Image Wizard

Image Wizard is a powerful web application for modifying, transforming, and generating images using AI. The platform leverages Cloudinary and FAL-AI to provide advanced image manipulation capabilities including restoration, generative fills, and various creative transformations.

![Image Wizard Logo](/public/assets/images/logo.svg)

## Features

- **Image Restoration**: Enhance and restore old or damaged photos
- **Generative Fill**: Intelligently fill in missing parts of images
- **Object Removal**: Clean up images by removing unwanted objects
- **Creative Transformations**: Apply artistic filters and effects
- **User Authentication**: Secure account management
- **Credit System**: Track and manage usage of transformation services

## Technologies Used

### Frontend

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI component library

### Backend & Services

- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Backend API endpoints
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [Cloudinary](https://cloudinary.com/) - Cloud-based image management
- [FAL-AI](https://www.fal.ai/) - AI image generation and transformation

### Authentication & Payments

- [Clerk](https://clerk.com/) - User authentication and management
- [Stripe](https://stripe.com/) - Payment processing

### Testing

- [Vitest](https://vitest.dev/) - Unit testing framework
- [Playwright](https://playwright.dev/) - End-to-end testing

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB connection
- Cloudinary account
- FAL-AI API key
- Clerk account for authentication
- Stripe account for payments

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/image-wizard.git
cd image-wizard
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MONGODB_URI=your_mongodb_uri

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

FAL_AI_API_KEY=your_fal_ai_api_key
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

### Run Unit Tests

```bash
npm run test
# or
yarn test
```

### Run End-to-End Tests

```bash
npm run e2e
# or
yarn e2e
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
