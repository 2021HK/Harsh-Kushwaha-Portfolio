# Harsh Kushwaha - Portfolio Website (React)

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ⚡ Built with React 18 and Vite for blazing fast performance
- 🎨 Styled with Tailwind CSS for modern, responsive design
- 🌊 Smooth scrolling navigation
- ✨ Animated typing effect
- 📱 Fully responsive across all devices
- 🎯 Clean, professional UI/UX

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **Typed.js** - Typing animation

## Getting Started

### Installation

```bash
cd portfolio-react
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/2021HK/portfolio-react.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (auto-configured for Vite)

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

## Project Structure

```
portfolio-react/
├── public/
│   └── img/              # Your images
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

1. Update personal info in components
2. Add your images to `public/img/`
3. Modify colors in `tailwind.config.js`
4. Update project links in `Projects.jsx`

## Author

Harsh Kushwaha
- GitHub: [@2021HK](https://github.com/2021HK)
- Email: kushwahaharsh2003@gmail.com
- LinkedIn: [Harsh Kushwaha](https://www.linkedin.com/in/harsh-kushwaha)

## License

MIT
