# BoxMedia - Digital Agency Portfolio

## Overview

BoxMedia is a modern, responsive digital agency portfolio website built with React, TypeScript, and Express.js. The application showcases a full-stack web platform designed to present digital services, portfolio items, team information, and client testimonials with a focus on premium user experience and modern design aesthetics.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth interactions and scroll animations
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider with dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with extensible interface
- **Development**: Hot module replacement via Vite integration

### Design System
- **Typography**: Inter font family with variable weights
- **Color Palette**: Neutral base with cyan/purple gradient accents
- **Components**: Glass morphism effects, gradient backgrounds, and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Key Components

### Client-Side Components
- **Navigation**: Sticky header with smooth scroll navigation and mobile hamburger menu
- **Hero Section**: Full-screen landing with typewriter effects and animated background
- **Portfolio**: Filterable project grid with category-based sorting
- **Services**: Service cards with animated icons and hover effects
- **Skills**: Circular progress indicators with scroll-triggered animations
- **Team**: Member profiles with modal bio displays
- **Testimonials**: Auto-rotating carousel with manual navigation
- **Contact**: Form validation with toast notifications (display-only)
- **Theme Toggle**: Animated dark/light mode switcher

### Server-Side Architecture
- **Route Registration**: Centralized API route management under `/api` prefix
- **Error Handling**: Global error middleware with structured responses
- **Request Logging**: Detailed API request/response logging with performance metrics
- **Development Integration**: Vite middleware for seamless SSR and HMR

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle-kit for database schema management

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express middleware handles requests, applies logging, and routes to appropriate handlers
3. **Data Persistence**: Drizzle ORM manages database interactions with type safety
4. **Response Handling**: Structured JSON responses with error handling
5. **Client Updates**: TanStack Query manages cache invalidation and UI updates

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Database**: Drizzle ORM, Neon Database serverless driver
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui components

### Animation and Interaction
- **Framer Motion**: Component animations and scroll-triggered effects
- **Embla Carousel**: Carousel components for testimonials
- **React Hook Form**: Form handling with validation resolvers

### Development Tools
- **Replit Integration**: Development banner and error overlay plugins
- **PostCSS**: CSS processing with Autoprefixer
- **Font Awesome**: Icon library for social media and UI icons

### Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **clsx/twMerge**: Conditional CSS class management
- **Nanoid**: Unique ID generation

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite development server with Express middleware integration
- **Error Handling**: Runtime error overlay for debugging
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Client Build**: Vite builds React application to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built client assets in production
- **Database**: Drizzle migrations deployed via `db:push` command

### Environment Configuration
- **Development**: NODE_ENV=development with TSX for server execution
- **Production**: NODE_ENV=production with built JavaScript execution
- **Database**: PostgreSQL via Neon Database with connection pooling

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```