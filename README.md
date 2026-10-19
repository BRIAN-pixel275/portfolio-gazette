# Brayo - Personal Portfolio

A responsive personal portfolio for Brian Muchiru Mwangi (Brayo), built with Next.js 14, React, and TypeScript. The editorial-inspired design presents software projects, finance interests, experience, and creative work.

## Portfolio sections

- Introduction and professional interests
- Selected projects, with links and project-status notes
- GitHub contribution activity and recently pushed public repositories
- About and background
- Skills and tools
- Experience and community roles
- Education and certification
- Contact links to GitHub and LinkedIn

## Getting started

You will need Node.js and npm installed. From the project directory, install dependencies and start the development server:

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To stop the server, press `Ctrl+C` in the terminal.

## GitHub activity

The portfolio displays a contribution chart for `BRIAN-pixel275` using the external chart service [ghchart.rshah.org](https://ghchart.rshah.org/). It also requests the latest public repositories from the GitHub REST API and lists up to six non-fork, non-archived repositories by recent push activity. The repository list is loaded in the browser and includes a retry message if GitHub's API is unavailable. Push activity does not guarantee a project is currently active.

## Editing portfolio content

Most portfolio copy, project details, and profile links are maintained in [`lib/content.ts`](./lib/content.ts). The GitHub activity component is in [`app/components/github-activity.tsx`](./app/components/github-activity.tsx). The page structure is in [`app/page.tsx`](./app/page.tsx), metadata is in [`app/layout.tsx`](./app/layout.tsx), and visual styles are in [`app/globals.css`](./app/globals.css).

Check project descriptions and links before publishing, especially where the content notes that features or contributions still need confirmation.

## Build and run for production

```powershell
npm run build
npm start
```

The production server runs at [http://localhost:3000](http://localhost:3000) by default.

## Deployment

The project can be deployed to Vercel by importing the repository and keeping the default Next.js build settings. For other hosting platforms, use `npm run build` and follow the provider's instructions for deploying a Next.js application.
