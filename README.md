# Landing Page Test Task

This repository contains the implementation of a landing page based on the provided Figma design. The project is built using **Next.js (App Router)** with **TypeScript** and **Tailwind CSS**.

---

## 🚀 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hamzashahzad7/testing-repo.git
   cd testing-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Technology Choices

- **Next.js (App Router)** – for modern React-based development with server and client components.
- **TypeScript** – for type safety and maintainability.
- **Tailwind CSS** – for utility-first styling and rapid UI development.
- **Lucide Icons** – for Icons.
- **CLSX+Tailwind Merge** – for dynamically written styles.

---

## 🎨 Figma Design Interpretation

- The Figma file included both **desktop** and **mobile** views.
- Where design specs were not explicitly clear (e.g., spacing between sections), I made proportional adjustments to maintain visual balance.
- Gradient backgrounds were adapted to scale dynamically with the section height.
- Typography and spacing follow the closest Tailwind equivalents to Figma tokens.

---

## 🤖 AI Assistance

- AI (ChatGPT GPT-4) was used for **CSS/Tailwind fixes** related to scaling a background gradient with dynamic section height.
- Details are documented in [AI_USAGE.md](./AI_USAGE.md).

---

## 📱 Responsive Breakpoints

Based on Figma mobile and desktop views, the following breakpoints were used:

- **Mobile:** `sm` (≤ 640px)
- **Tablet:** `md` (641px – 1024px) [interpolated for smoother scaling]
- **Desktop:** `lg` and above (≥ 1025px)

---

## 📌 Assumptions

- Figma did not provide hover/active states for all buttons..
- Exact line-heights were not specified in some areas; Tailwind defaults were applied.
- Section padding values were normalized for consistency across breakpoints.
- Figma did not include tablet breakpoint screens so I managed myself for its responsiveness.

---

## ⚠️ Known Issues / Limitations

- No animations were explicitly defined in the Figma design. Subtle fade-in transitions were avoided to keep the design true to spec.
- Tested primarily on Chrome and Firefox; Safari testing was limited.
- Images from Figma were not optimized for production; in a real project, For time shortage I used img tags. ALso I personally dont use next/image for optimization because its has glitches of width and height requirements. For optimization for production grade app I will ask design to optimize images Also we can use defer loading for images.


---

## 📂 Project Structure

```
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/helpers.ts
├── public/
├── styles/
├── README.md
└── AI_USAGE.md
```

---

## 🔗 Repository

[GitHub Repo](https://github.com/hamzashahzad7/testing-repo)
