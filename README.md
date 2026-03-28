# 🍊 AmberTask - React Task Manager

[**✨ View Live Demo**](INSERT_LINK_HERE)

An intentional UI/UX experiment focusing on accessibility and seamless state management. Built to demonstrate clean React architecture and responsive design patterns.

## 🎯 The "Why"

Most todo apps are cluttered. **AmberTask** was built to test:

1. **Performance:** Efficient list rendering using functional state updates.
2. **Accessibility:** Custom focus states and semantic HTML for screen readers.
3. **Identity:** Using `crypto.randomUUID()` for robust local data integrity.

## 🛠️ Tech Stack

- **Library:** [React](https://reactjs.org) (Hooks & Functional Components)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (Custom Amber/Black Theme)
- **Logic:** Functional `setTodos` updates for race-condition prevention.

## 🚀 Key Features & Implementation

- **Immutable State Management:** Prevents stale state bugs using functional update patterns.
- **UUID-based Keying:** Ensures perfect list reconciliation during React's diffing process.
- **Micro-Interactions:** Custom hover/focus ring animations on inputs and buttons.

## 📦 Installation

```bash
git clone https://github.com
cd  react-state-architecture-demo
npm install
npm start
```
