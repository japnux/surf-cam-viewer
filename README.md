# Surf Webcam Viewer - Monorepo

This repository contains the source code for the Surf Webcam Viewer, a platform to watch live HLS streams from surf spots.

The project is structured as a monorepo using [Turborepo](https://turbo.build/) and [pnpm workspaces](https://pnpm.io/workspaces).

- `/apps/web`: The main Next.js 15 application.
- `/legacy`: The original static HTML/CSS/JS site.
- `/packages`: For shared code (e.g., UI components, configs) in the future.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI**: [shadcn-ui](https://ui.shadcn.com/) (to be added)
- **Video Playback**: [HLS.js](https://hls-js.com/)
- **Authentication**: [Auth.js (NextAuth.js)](https://authjs.dev/)
- **Testing**: [Playwright](https://playwright.dev/) for End-to-End tests.
- **Linting/Formatting**: ESLint & Prettier.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (v20.x or later)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/japnux/surf-cam-viewer.git
    cd surf-cam-viewer
    ```

2.  **Install dependencies from the root:**
    ```bash
    pnpm install
    ```

### Environment Variables

1.  Navigate to the web application directory:
    ```bash
    cd apps/web
    ```

2.  Create a local environment file by copying the sample file:
    ```bash
    cp .env.sample .env.local
    ```

3.  Fill in the required values in `.env.local`. You will need credentials for Google OAuth and an email provider.

### Running the Development Server

From the root of the monorepo, run:

```bash
pnpm dev
```

This will start the Next.js development server for the `web` app, typically on [http://localhost:3000](http://localhost:3000).

## Available Scripts

All scripts should be run from the root of the monorepo.

- `pnpm dev`: Start the development server.
- `pnpm build`: Build all applications for production.
- `pnpm lint`: Run the linter across all packages.
- `pnpm test:e2e`: Run Playwright end-to-end tests (from `apps/web` directory).
