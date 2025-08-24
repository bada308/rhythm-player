# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on port 3013 with Turbopack
- `pnpm build` - Build production version
- `pnpm start` - Start production server
- `pnpm lint` - Run Next.js linter

## Code Standards and Tools

This project uses **Biome** for formatting and linting instead of Prettier/ESLint:
- Tab indentation (configured in biome.json)
- Double quotes for JavaScript/TypeScript
- Import organization enabled
- Run `npx biome check` to check formatting and linting
- Run `npx biome format` to format code
- Run `npx biome lint` to lint code

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **UI Library**: HeroUI (NextUI fork) with React 19
- **Audio**: Tone.js for audio synthesis and rhythm generation
- **Styling**: TailwindCSS v4 with HeroUI integration
- **Package Manager**: pnpm (evidenced by pnpm-lock.yaml)

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with navigation to sheet creation
  - `create-sheet/` - Sheet creation feature
    - `_components/` - Page-specific components (underscore prefix for private components)
- Components use TypeScript interfaces for props
- Korean language support (lang="ko" in layout)

## Architecture Notes

- All pages are client components ("use client")
- HeroUIProvider wraps the entire application in layout.tsx
- Custom TailwindCSS configuration integrates HeroUI theme
- BPM controller component suggests this is a rhythm/music application
- Path aliases configured with `@/*` pointing to root directory

## HeroUI Integration

- Uses HeroUI as the primary component library
- Light theme configured by default (className="light" in body)
- Custom hero.ts configuration file for TailwindCSS plugin
- HeroUI theme source included via @source directive in globals.css