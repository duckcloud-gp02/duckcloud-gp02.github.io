---
marp: true
theme: gaia
paginate: true
---

# Duck Cloud Group 02 Project Presentation
Nov 2, 2024

---

# Project Overview

- Full-stack web developer course project
- Multiple HTML pages for team members
- Centralized styling and scripting
- JSON data source for team information
- Repo: https://github.com/duckcloud-gp02/duckcloud-gp02.github.io
- Deployed on GitHub Pages, https://duckcloud-gp02.github.io/

---

#### Project Structure

```
duckcloud-gp02/
├── index.html
├── README.md
├── 1003/
│   └── index.html
├── 1010/
│   └── index.html
├── 1011/
│   └── index.html
├── 1082/
│   └── index.html
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── main.css
└── public/
    └── data/
        └── team-members.json
```

---

# HTML Pages

- `index.html`: Main landing page
- Individual pages for team members (1003, 1010, 1011, 1082)
- Planned consistent structure across pages
- Linked to shared assets (CSS, JavaScript)

---

# CSS (main.css)

- Centralized styling for consistent look and feel
- Responsive design for various screen sizes
- Custom fonts and color schemes
- Dark mode support

---

# JavaScript (main.js)

- Dynamically loads team member data
- Populates the main page with team information
- Handles dark mode toggling
- Manages any interactive elements

---

# JSON as Data Source

- `team-members.json` stores team information
- Why JSON?
  1. No database option on GitHub Pages
  2. Easy to read and maintain
  3. Can be version-controlled with Git
  4. Simple to parse with JavaScript

---

# GitHub Pages Deployment

- Static site hosting
- No server-side processing available
- Perfect for HTML, CSS, and client-side JavaScript
- JSON serves as a lightweight, static data source

---

# Benefits of This Approach

1. Easy to maintain and update
2. Version control for all aspects (including data)
3. Fast loading and rendering
4. No database setup or management required
5. Free hosting with GitHub Pages

---

# Future Improvements

- Add more interactive features
- Centralized style and layout for all pages
- Consider using a static site generator such as jekyll or astro

---

# Thank You!
Q & A