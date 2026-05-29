# Shivam's 3D Portfolio

A modern personal portfolio website built with React, TypeScript, Three.js, Tailwind CSS, and Framer Motion. It showcases my skills, experience, featured projects, social links, and a contact form powered by EmailJS.

![Portfolio Preview](src/assets/preview.png)

## About

Hi, I'm Shivam. I build e-commerce experiences, user interfaces, and full-stack web applications with a focus on clean design, smooth interactions, and practical user experience.

This portfolio includes animated sections, interactive 3D models, project showcases, technology cards, work experience, and a responsive contact page.

## Features

- Interactive 3D computer, earth, stars, and technology visuals
- Responsive layout for desktop, tablet, and mobile screens
- Smooth scroll-based animations with Framer Motion
- Project showcase with live demo and source code links
- Experience timeline and technology stack section
- Contact form with EmailJS integration
- Toast notifications for contact form feedback

## Tech Stack

- React
- TypeScript
- Vite
- Three.js
- React Three Fiber
- React Three Drei
- Tailwind CSS
- Framer Motion
- EmailJS

## Featured Projects

- **CareerLens** - AI career guidance platform that analyzes skills, interests, and aptitude to recommend career paths and roadmaps.
- **Optivio AI** - SaaS platform for AI-powered SEO analysis, competitor monitoring, keyword insights, and digital marketing content generation.
- **Sentrachat** - Real-time chat application with AI-powered emotion tracking, secure authentication, and scalable cloud deployment.

## Getting Started

### Prerequisites

Install Node.js and npm on your machine.

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root. You can copy the sample values from `.env.example`.

```env
VITE_APP_SERVICE_ID=your_emailjs_service_id
VITE_APP_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_KEY=your_emailjs_public_key
VITE_APP_EMAILJS_RECIEVER=your_receiver_email
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run check-types
```

## Project Structure

```text
src/
  assets/          Images, icons, project screenshots, and social assets
  components/      Portfolio sections and reusable UI components
  components/canvas/
                   Three.js canvas components
  constants/       Navigation, services, technologies, experience, projects
  hoc/             Section wrapper helper
  utils/           Animation and class name utilities
```

## Contact

- GitHub: [Shivamch0](https://github.com/Shivamch0)
- LinkedIn: [Shivam Choudhary](https://www.linkedin.com/in/shivam-choudhary-28a019346)

## License

This project is licensed under the MIT License.
