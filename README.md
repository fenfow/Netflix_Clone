# Netflix Clone 🎬

This is a Netflix-inspired web application built using React, Firebase Authentication, The Movie Database (TMDB) API,  and Vite. The goal is to replicate the visual style and key functionality of the real Netflix platform, including user login, trailer viewing, and dynamic navigation.

## 🔍 What the Code Does

The project is structured into modular React components and pages:

- **Login Page**  
  Uses Firebase Authentication to allow users to sign in.

- **Home Page**  
  Displays dynamically generated movie cards (title cards). Clicking a card loads a trailer.

- **Player Page**  
  Shows the video player for the selected movie or trailer.

### 🔧 Components Overview

- `Navbar` and `Footer`: Reusable UI elements across all pages.
- `TitleCards`: Fetches and displays lists of movies by category.
- `firebase.js`: Configures Firebase and handles user authentication.

The app uses **React Router** for navigation and has been styled for responsiveness on different devices.

## 🌐 Link to website

Visit the website at netflix-clone-tau-opal-64.vercel.app!

## 🚀 Quick Start

### Prerequisites

- Node.js and npm installed on your system
- A Firebase project
- A TMDB API key

### 1. Clone and Install

```bash
git clone https://github.com/fenfow/Netflix_Clone.git
cd Netflix_Clone
npm install
```

### 2. Firebase Setup

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable **Email/Password Authentication**
- Replace the config in `src/firebase.js` with your Firebase credentials

### 3. TMDB API Setup

- Go to [TMDB API](https://www.themoviedb.org/settings/api)
- Sign up and create an API key
- Store the key in an `.env` file like this:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

- Use `import.meta.env.VITE_TMDB_API_KEY` in your code to access it

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📁 Project Highlights

- **Vite** as the development environment for fast refresh and easy config
- **React Hooks** for managing state and side effects
- **Firebase** for auth logic (sign in/out, session handling)
- **TMDB API** for real-time movie data
- **Modular Structure** for scalability and reusability




