# Brayo — Personal Portfolio

A responsive personal portfolio for Brian Muchiru Mwangi (Brayo), built with Next.js 14, React, and TypeScript. The visual style takes inspiration from an editorial newspaper while presenting software projects, finance interests, experience, and creative work.

## Portfolio sections

- Introduction and professional interests
- Selected projects, with live links where available and notes where project status needs verification
- About and background
- Skills and tools
- Experience and community roles
- Education and certification
- Contact links to GitHub and LinkedIn

## Getting started

You’ll need Node.js and npm installed. From the project directory, install dependencies and start the development server:

```powershell
npm install
npm run dev
```



## Editing portfolio content

Most of the portfolio’s text, project details, and profile links are maintained in [`lib/content.ts`](./lib/content.ts). Update that file to change the name, introduction, projects, skills, experience, education, or social links. The page structure is in [`app/page.tsx`](./app/page.tsx), metadata is in [`app/layout.tsx`](./app/layout.tsx), and visual styles are in [`app/globals.css`](./app/globals.css).

Check project descriptions and links before publishing, especially where the content notes that features or contributions still need confirmation.

## Build and run for production

```powershell
npm run build
npm start
```

The production server runs at [http://localhost:3000](http://localhost:3000) by default.

## Deployment

The project can be deployed to Vercel by importing the repository and keeping the default Next.js build settings. For other hosting platforms, use `npm run build` and follow the provider’s instructions for deploying a Next.js application.
