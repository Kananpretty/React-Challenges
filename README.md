# React Challenges

A collection of small React challenges built to practice React fundamentals, component design, state management, hooks, and common frontend patterns.

The goal of this repository is to build small, focused implementations while strengthening React fundamentals through hands-on practice.

## 🚀 Live Demo

[React Challenges](https://react-challenges-playground.vercel.app/)

## 📁 Project Structure

```text
react-challenges/

├── src/
│   ├── components/
│   │   ├── ChallengeCard/
│   │   └── Layout/
│   ├── challenges/
│   │   ├── rc1-counter/
│   │   │   └── Counter.jsx
│   │   ├── rc2-to-do-list/
│   │   │   └── ToDoList.jsx
│   │   └── rc3-uncontrolled-form/
│   │       └── UncontrolledForm.jsx
│   ├── data/
│   │   └── challengesData.js
│   ├── pages/
│   │   ├── Home/
│   │   └── Challenges/
│   ├── App.jsx
│   └── App.css
├── public/
├── package.json
└── README.md
```

## 🧩 Challenges

| #   | Challenge         | Concepts                                                             | Difficulty |
| --- | ----------------- | -------------------------------------------------------------------- | ---------- |
| 1   | Counter           | `useState`, `useRef`                                                 | Beginner   |
| 2   | To Do List        | `useState`, Array Methods, Controlled Input                          | Beginner   |
| 3   | Uncontrolled Form | `FormData`, Uncontrolled Inputs, `defaultValue`, Reusable Components | Beginner   |

### Challenge 1 — Counter

A counter application that demonstrates the difference between React state and refs by implementing counter behavior using both `useState` and `useRef`.

**Requirements:**

- Create a counter using `useState`.
- Increment and decrement the state-based counter.
- Create a second counter using `useRef`.
- Increment and decrement the ref-based counter without triggering a re-render.
- Display the ref value only when explicitly reading the ref.
- Use state to trigger the UI update when displaying the current ref value.
- Observe the difference between `useState` and `useRef` when updating values.

### Challenge 2 — To Do List

A simple To Do List application focused on state management, controlled form inputs, immutable state updates, and common JavaScript array methods.

**Requirements:**

- Add new tasks by submitting the form using the Add button or Enter key.
- Prevent empty or whitespace-only tasks from being added.
- Clear the input after successfully adding a task.
- Display all tasks and show an empty state when there are no tasks.
- Mark tasks as complete and toggle their completion status.
- Delete individual tasks.
- Display the number of remaining incomplete tasks.
- Display `All tasks completed` when all tasks are complete.
- Clear all completed tasks.
- Show the Clear completed button only when completed tasks exist.
- Complete all tasks when at least one task is incomplete.
- Toggle all tasks between completed and incomplete states.

### Challenge 3 — Uncontrolled Form

A simple uncontrolled form focused on browser-managed input values, the `FormData` API, form submission, and reusable input components.

**Requirements:**

- Display default values in the form inputs using `defaultValue`.
- Manage form values without using React hooks or state.
- Give each form input a `name` attribute so its value can be collected by `FormData`.
- Handle form submission using a submit handler.
- Prevent the browser's default form submission behavior.
- Collect the values from all inputs using the browser's `FormData` API.
- Display the collected form data inside an alert.
- Refactor each form input into a reusable `Input` component.

More challenges will be added as I work through different React concepts and patterns.

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- React Router
- CSS
- npm

## 🎯 What I'm Practicing

- React components
- Props and component composition
- State management
- React Hooks
- `useState`
- `useRef`
- Controlled inputs
- Uncontrolled inputs
- `defaultValue`
- `FormData`
- Conditional rendering
- Event handling
- React Router
- Data-driven rendering
- Reusable component patterns
- JavaScript array methods
  - `map()`
  - `filter()`
  - `some()`
  - `every()`

- Immutable state updates
- Derived values from state
- Form submission
- Accessible UI
- Responsive layouts

## 🏃 Getting Started

Clone the repository:

```bash
git clone https://github.com/kanan-mehta/React-Challenges.git
```

Navigate into the project:

```bash
cd React-Challenges
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown by Vite in your browser.

## 📌 Approach

Each challenge is kept small and focused on a particular React concept or frontend pattern.

Challenge metadata is maintained in a central data file, while each challenge has its own implementation. This allows the challenge page and navigation to remain reusable as new challenges are added.

The challenges are intentionally implemented incrementally, with requirements added as new concepts are introduced. This helps reinforce practical recall of React and JavaScript patterns rather than relying only on theoretical knowledge.

The goal is not simply to complete each challenge, but to practice translating a requirement into the appropriate React or JavaScript pattern.

## 📚 Learning Goal

This repository is part of my ongoing frontend development practice, with a focus on strengthening React fundamentals before moving into larger application architecture and full-stack projects.

The goal is to become comfortable translating a requirement into the appropriate React or JavaScript pattern, particularly for common interview scenarios involving:

- State and refs
- Events and event handlers
- Arrays and immutable updates
- Controlled and uncontrolled forms
- Form submission
- Conditional rendering
- Derived values
- Component composition
- Reusable components
- Common frontend behavior

---

Built with React + Vite.
