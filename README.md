# 🚀 GitHub Profile Viewer

A modern and responsive **GitHub Profile Viewer** built with **React, TypeScript, and Tailwind CSS**. This application allows users to search for any GitHub username and instantly view the user's public profile information using the GitHub REST API.

> Developed as **React Task 1** for **The Tann Mann Foundation Learning School**.


## ✨ Features

- 🔍 Search any GitHub username
- 👤 Display user avatar
- 📝 View profile name and bio
- 📚 Public repositories count
- 👥 Followers & Following count
- 📍 Location
- 🏢 Company
- 🌐 Website (if available)
- 📅 Joined GitHub date
- 📄 Public gists count
- 🔗 Direct link to GitHub profile
- ⚡ Loading indicator
- ❌ Error handling for invalid usernames
- ⌨️ Press **Enter** to search
- 🧹 Clear search input
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Vite
- GitHub REST API
- Lucide React Icons

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── ProfileCard.tsx
│
│── services/
│   └── githubApi.ts
│
│── types/
│   └── github.ts
│
│── App.tsx
│── main.tsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/pratikdevelop/GitHub-Profile-Viewer.git
```

### Navigate to the project

```bash
cd GitHub-Profile-Viewer
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🌐 GitHub API

This project uses the GitHub Users API.

```
https://api.github.com/users/{username}
```

Example

```
https://api.github.com/users/octocat
```

---

## 📷 Screenshots

### Home

_Add screenshot here_

### Search Result

_Add screenshot here_

### Mobile View

_Add screenshot here_

---

## 📈 Future Improvements

- Dark Mode
- Search History
- Copy GitHub Profile Link
- Repository List
- Pagination
- Favorite Users
- Recent Searches
- GitHub Contribution Graph

---

## 📖 Learning Objectives

This project demonstrates:

- React Components
- State Management using useState
- API Integration
- Component Reusability
- TypeScript Interfaces
- Conditional Rendering
- Error Handling
- Loading States
- Responsive UI Design

---

## 👨‍💻 Author

**Pratik Raut**

GitHub:
https://github.com/pratikdevelop

LinkedIn:
https://www.linkedin.com/in/pratikraut/

---

## 📄 License

This project is developed for learning purposes as part of **The Tann Mann Foundation Learning School React Task**.