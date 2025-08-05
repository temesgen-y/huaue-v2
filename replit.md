# Huayue Plastics Industry Website

## Overview

This is a modern corporate website for Huayue Plastics Industry, a plastics manufacturing company. The application is built as a full-stack web application with a React frontend and Express.js backend. It showcases the company's two main product lines (Huayue industrial products and Edier consumer products), provides company information, news updates, and contact functionality. The site is designed to serve as a professional corporate presence with a focus on manufacturing capabilities and product offerings.

## User Preferences

- Preferred communication style: Simple, everyday language
- Brand color scheme: White (#ffffff), Green (#28a745), Black (#000000)
- Consistent color theme across all components, fonts, buttons, headers, links, and hover states

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling and optimization

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database provider
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

### Development Environment
- **Bundler**: Vite with React plugin and runtime error overlay
- **Development Server**: Integrated Express server with Vite middleware in development
- **Hot Module Replacement**: Vite HMR for fast development feedback
- **Type Checking**: TypeScript with strict mode enabled
- **Code Quality**: ESLint and TypeScript compiler for code quality

### Project Structure
- **Monorepo Layout**: Shared schema and types between client and server
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common schemas and types in `/shared` directory
- **Component Organization**: Modular component structure with UI components, layout components, and page-specific sections

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend Framework**: Express.js with TypeScript support
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with PostgreSQL dialect

### UI and Styling
- **Component Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Brand Colors**: White (#ffffff), Green (#28a745), Black (#000000) with CSS custom properties
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS-based animations and transitions

### Development Tools
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: tsx for TypeScript execution, Replit development plugins
- **Type Safety**: Zod for runtime type validation with Drizzle integration

### Data Management
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod resolvers
- **Validation**: Zod schema validation library
- **Date Handling**: date-fns for date manipulation

### Production Considerations
- **Session Management**: PostgreSQL-based sessions for scalability
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Security**: CORS configuration and input validation
- **Performance**: Optimized builds with code splitting and lazy loading

## Recent Changes

### Brand Color Implementation (August 2025)
- Updated Tailwind configuration with brand color utilities
- Implemented CSS custom properties for consistent color scheme
- Updated all components to use white, green (#28a745), and black color palette
- Applied brand colors to header navigation, hero slider, buttons, and sections
- Created utility classes for brand colors (bg-brand-accent, text-brand-accent, etc.)
- Established consistent hover states and focus rings using green accent color