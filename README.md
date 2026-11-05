# VAYO – Ride-Hailing Platform

**VAYO** is a modern ride-hailing concept website built to provide reliable, affordable, and safe urban transportation. Inspired by the convenience of established ride-hailing services, VAYO explores how technology and intuitive digital experiences can simplify everyday mobility for riders, drivers, and businesses.

The project features a responsive, multi-page web application built with React, offering a demonstration of the core interfaces and user journeys found in a contemporary ride-hailing platform.

## Live Preview

Explore the website:

**[VAYO – Live Preview](https://vayo-dannwillzs-projects.vercel.app/)**

## Project Overview

VAYO is designed around three primary user groups:

- **Riders:** Individuals looking for convenient transportation and flexible ride options.
- **Drivers:** Vehicle owners interested in flexible driving opportunities.
- **Businesses:** Companies seeking organised transportation solutions for employees, clients, and corporate travel.

The platform combines a clean interface, straightforward navigation, and dedicated pages for different transportation needs.

## Features

### 1. Homepage
- Modern landing page introducing the VAYO brand and its services.
- Interactive ride-booking entry point.
- Overview of platform features and how the service works.
- Presentation of available ride categories.
- Safety information and driver opportunities.
- Corporate transportation information.
- Demonstration testimonials and mobile app promotional section.

### 2. Ride Booking
- Pickup and destination input fields.
- Option to swap pickup and destination locations.
- Passenger selection.
- Immediate or scheduled ride selection.
- Three ride categories:
  - **Vayo Go:** Affordable everyday transportation.
  - **Vayo Comfort:** Enhanced comfort and additional legroom.
  - **Vayo XL:** Larger vehicles for groups and additional luggage.
- Illustrative fare estimation based on base fare, distance, and journey duration.
- Ride selection and simulated booking confirmation.

### 3. Rider Authentication
- Login and account registration interfaces.
- Form validation.
- Password confirmation during registration.
- Password visibility toggle.
- Simulated authentication feedback.

### 4. Driver Registration
- Dedicated driver recruitment page.
- Driver registration form.
- Personal and contact information fields.
- Vehicle details and driving licence information.
- Form validation and simulated application confirmation.
- Overview of driver benefits, including flexible working hours and illustrative earnings.

### 5. VAYO for Business
- Dedicated corporate transportation page.
- Presentation of business transportation solutions.
- Features covering centralised billing, invoicing, spending controls, trip reporting, and corporate ride policies.

### 6. Safety
- Dedicated safety information page.
- Proposed driver verification and trip-sharing features.
- Emergency assistance concepts.
- Two-way rider and driver ratings.
- Responsible riding practices and safety recommendations.

### 7. Help & Support
- Frequently asked questions with expandable answers.
- Contact information section.
- Customer enquiry form with validation.
- Simulated message submission feedback.

### 8. Responsive Interface
- Responsive layouts for desktop, tablet, and mobile screens.
- Mobile navigation menu.
- Consistent visual design and reusable components.
- Lucide icons and CSS-based animations and transitions.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 18 | Frontend development |
| JavaScript (ES6+) | Application logic |
| Vite | Development server and build tool |
| React Router DOM | Client-side navigation |
| CSS3 | Styling, layouts and responsiveness |
| Lucide React | Interface icons |
| HTML5 | Application structure |

## Project Structure

```text
VAYO/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BookingWidget.jsx
│   │   ├── BusinessSection.jsx
│   │   ├── DownloadApp.jsx
│   │   ├── DriverSection.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── RideCategories.jsx
│   │   ├── SafetySection.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   ├── faqs.js
│   │   ├── rideOptions.js
│   │   ├── safetyFeatures.js
│   │   └── testimonials.js
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── BookRide.jsx
│   │   ├── Business.jsx
│   │   ├── DriverRegistration.jsx
│   │   ├── Help.jsx
│   │   ├── Home.jsx
│   │   └── Safety.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

Follow these instructions to run VAYO locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/dannwillz/VAYO.git
```

**2. Navigate into the project directory**

```bash
cd VAYO
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local development URL provided in your terminal, typically:

```text
http://localhost:5173
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint code checks |

## Important Project Notes

VAYO is currently a frontend demonstration and conceptual project. It showcases the user interfaces and simulated interactions of a ride-hailing platform.

The following limitations apply:

- No backend or database integration.
- No real-time driver matching or dispatch.
- No live GPS tracking or map integration.
- No actual payment processing.
- Authentication and registration flows are simulated.
- Booking, contact, and driver application submissions do not transmit or store user data.
- Fare calculations use illustrative distance and duration values rather than live route data.
- Safety features are proposed concepts and are not operational services.
- App Store and Google Play download links are placeholders.

Displayed fares, locations, testimonials, contact details, and driver earnings are demonstration content and should not be interpreted as verified commercial information.

## Project Purpose

This project explores frontend development and the design of a multi-page transportation platform using React. It demonstrates component-based architecture, client-side routing, form handling, state management, responsive web design, and the organisation of a larger frontend application.

## Author

Developed by **[Daniel Williams](https://www.linkedin.com/in/dannwillz/)**.

---

**VAYO — Your city. Your ride. Your way.**
