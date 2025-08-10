<!-- 
# 🚀 WordToPDF Converter – Instant, Secure, Free
This is the main heading of the README. It should be short, catchy, and explain the purpose of the project.
-->

# 🚀 WordToPDF Converter – Instant, Secure, Free

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/Frontend-React-blue)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-68A063)](https://nodejs.org/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen)](#-contributing)
[![Open Issues](https://img.shields.io/github/issues/adnanbhutta/word-to-pdf)](https://github.com/adnanbhutta/word-to-pdf/issues)

> **WordToPDF** is a lightning-fast, privacy-focused Word Document to PDF converter.  
> Upload `.doc` or `.docx` and get a high-quality PDF in seconds — no sign-up, no data tracking, 100% free.

---

<!-- 
## 🖼 Preview
Add screenshots or gifs of your application here. This helps users understand the UI without running the project.
-->
## 🖼 Preview

| Upload Screen | Conversion Success |
|---------------|--------------------|
| ![Upload Screenshot](./assets/upload-screen.png) | ![Success Screenshot](./assets/success-screen.png)[Upload Screenshot](./assets/home-page.png) |


<!-- 
## 🎯 Why Choose WordToPDF?
List the unique selling points or advantages of using your tool.
-->

## 🎯 Why Choose WordToPDF?

- ⚡ **Ultra Fast:** Instant conversions powered by Node.js backend  
- 🔒 **Secure:** Files processed in-memory, deleted immediately after conversion  
- 📱 **Fully Responsive:** Works perfectly on mobile, tablet, and desktop  
- 🎨 **Minimal Modern UI:** Built with TailwindCSS and clean UX principles  
- 🌐 **Cross Browser:** Chrome, Firefox, Edge, Safari supported  
- 💰 **Completely Free:** No subscriptions, no ads  

---

<!-- 
## 📊 System Architecture
Here we use Mermaid.js to visualize the process flow.
-->

## 📊 System Architecture


graph LR
A[User Uploads Word File] --> B[Frontend React App]
B --> C[POST /convertFile API]
C --> D[Node.js Backend]
D --> E[LibreOffice / DOCX-to-PDF Engine]
E --> F[Generate PDF]
F --> G[Send PDF Back to Frontend]
G --> H[User Downloads PDF]

## 🛠 Tech Stack
Frontend:
React · Vite · TailwindCSS · React Icons

Backend:
Node.js · Express · Multer · LibreOffice

Dev Tools:
ESLint · PostCSS · Git · GitHub Actions

## 📂 Folder Structure
📦 WordToPDF
 ┣ 📂 Backend
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 package.json
 ┣ 📂 Frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┃ ┃ ┗ 📜 Home.jsx
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┗ 📜 main.jsx
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 vite.config.js
 ┗ 📜 README.md
## 🖥 Deployment Guide
You can deploy:

Frontend → Vercel / Netlify

Backend → Render / Railway / Heroku

Example: Deploying Backend on Render

Push backend folder to GitHub

Create new Web Service in Render

Add npm install && npm start as build/start commands

Add environment variables if needed
## 📜 License
Distributed under the MIT License. See LICENSE for more information.
## 💬 Contact
Adnan Ali
📧 Email: adnanbhutta51274.com
