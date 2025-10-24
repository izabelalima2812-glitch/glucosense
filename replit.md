# Overview

GlucoSense is a comprehensive glucose monitoring application designed to help healthcare professionals and individuals with diabetes track blood glucose levels, manage patient health data, and visualize trends over time. The application provides a medical dashboard with patient information management, detailed glucose monitoring with five specialized sections, interactive charts for data analysis, sensor integration capabilities, and comprehensive data export functionality.

The system is built as a full-stack web application with a React frontend and Express.js backend, using TypeScript throughout for type safety. It features a modern, healthcare-focused UI built with shadcn/ui components and Tailwind CSS, providing an intuitive experience for medical professionals and diabetes management.

# User Preferences

Preferred communication style: Simple, everyday language.

Medical diagnostic approach: 
- System must automatically generate diabetes diagnoses based on ESP sensor color strip data cross-referenced with patient medical information stored in Firebase. Diagnosis generation is automated, not manual doctor entry.
- Comprehensive urine diagnostic system providing doctor-level medical analysis with detailed pathophysiology, differential diagnoses, treatment recommendations, and follow-up plans. Must include extensive diagnostic parameters equivalent to professional medical assessment.

# System Architecture

## Frontend Architecture

The client-side application is built using **React 18** with **TypeScript** and utilizes a component-based architecture. The application uses **Wouter** for lightweight client-side routing, avoiding the complexity of larger routing libraries. State management is handled through **TanStack Query** (React Query) for server state management, providing caching, synchronization, and background updates.

The UI layer is constructed using **shadcn/ui** components built on top of **Radix UI primitives**, ensuring accessibility and consistent design patterns. **Tailwind CSS** provides utility-first styling with a custom design system that includes healthcare-specific color schemes and spacing. The application is responsive and includes mobile-optimized layouts.

### Medical Dashboard Features

## Comprehensive Medical Diagnostic System

The application now features both glucose monitoring and advanced urine diagnostics:

### Glucose Monitoring Dashboard

The application features a comprehensive three-tab medical dashboard:

1. **Visão Geral (Overview)**: Patient statistics, quick glucose recording, trend charts, and recent readings
2. **Monitoramento de Glicose (Glucose Monitoring)**: Five specialized sections:
   - **Data Analysis**: Current readings with pH calculations, health recommendations, sensor status panel
   - **View Results**: Historical data with filtering, date range selection, and comprehensive charts
   - **Save Data**: Local data storage for offline use with localStorage integration
   - **Export Data**: CSV/JSON export functionality with shareable links
   - **Settings**: Device management, target range configuration, notification settings, appearance customization
3. **Informações do Paciente (Patient Information)**: Demographics, medical history, and auto-save functionality

### Advanced Urine Diagnostic System

The application includes a comprehensive urine analysis system with three levels of diagnostic capability:

1. **Comprehensive Medical Analysis**: Complete doctor-level analysis including:
   - Physical examination (color, clarity, odor, foam, volume)
   - Chemical analysis (10 dipstick parameters with clinical interpretation)
   - Microscopic examination (cellular elements, crystals, casts, bacteria)
   - Clinical context integration (symptoms, medical history, medications, vital signs)
   - Automated differential diagnosis generation with confidence scoring
   - Evidence-based treatment recommendations and follow-up plans
   - Medical condition database with ICD-10 coding and pathophysiology
   - Urgency assessment with appropriate clinical workflow

2. **Interactive Analysis**: Rapid analysis tool for primary urine parameters with automated medical recommendations

3. **Basic Diagnostic Test**: Simple parameter testing with probability-based analysis

The diagnostic engine uses advanced medical algorithms to evaluate multiple diagnostic criteria, generate confidence scores, and provide comprehensive clinical recommendations including immediate actions, treatment plans, and follow-up protocols.

Component structure follows a clear hierarchy:
- **Pages**: Route-level components for each main application view
- **Layout Components**: Shared navigation and header elements
- **UI Components**: Reusable design system components with medical-specific styling
- **Hooks**: Custom React hooks for data fetching and business logic

## Backend Architecture

The server follows a **RESTful API** design pattern built with **Express.js** and TypeScript. The architecture implements a clean separation of concerns:

- **Route Layer**: Defines API endpoints and handles HTTP request/response cycles
- **Storage Layer**: Abstracts data persistence operations through an interface-based approach
- **Schema Layer**: Shared TypeScript types and Zod validation schemas

The current implementation uses an **in-memory storage system** for development and demonstration purposes, but the interface-based design allows for easy migration to persistent storage solutions. The storage interface defines methods for user management, glucose reading operations, and sensor data handling.

API endpoints follow RESTful conventions:
- User operations (`GET/PUT /api/users/:id`)
- Glucose readings (`GET/POST/PUT/DELETE /api/glucose-readings/:userId`)
- Sensor data management (`GET/POST/PUT /api/sensor/:userId`)

## Data Storage Architecture

The application uses **Drizzle ORM** for database operations with **PostgreSQL** as the target database. The schema is defined in a shared module to ensure type consistency between frontend and backend:

- **Users Table**: Stores personal information, diabetes type, target ranges, and notification preferences
- **Glucose Readings Table**: Records glucose values with timestamps, measurement contexts, and optional notes
- **Sensor Data Table**: Manages IoT device connections, settings, and synchronization status

Data validation is implemented using **Zod schemas** that generate both TypeScript types and runtime validation, ensuring data integrity across the application stack.

## Authentication & Authorization

The current implementation includes placeholder authentication mechanisms designed for future expansion. The system architecture supports user-based data isolation and includes session management infrastructure through Express middleware.

## Real-time Capabilities

The application includes a **Firebase service layer** prepared for real-time data synchronization. While currently implemented as a mock service, the architecture supports:
- Real-time glucose reading updates
- Live sensor data streaming
- User profile change notifications
- Cross-device synchronization

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database for persistent data storage
- **Drizzle ORM**: Type-safe database operations with schema migrations
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge deployments

## UI & Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom healthcare design system
- **Lucide React**: Modern icon library with healthcare-specific icons
- **Recharts**: Charting library for glucose trend visualization

## Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Form state management with validation integration

## Development & Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Future Integrations
- **Firebase**: Prepared for real-time data synchronization and cloud messaging
- **IoT Sensor APIs**: Architecture supports integration with glucose monitoring hardware
- **Healthcare APIs**: Extensible design for integration with EMR systems and healthcare providers