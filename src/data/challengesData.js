import Counter from "../challenges/rc01-counter/Counter";
import ToDoList from "../challenges/rc02-to-do-list/ToDoList";

const challengesData = [
  {
    id: 1,
    slug: "counter",
    title: "Counter",
    concepts: ["useState", "useRef"],
    description:
      "Learn the difference between useState and useRef by creating two counters and observing how state and refs affect component rendering.",
    difficulty: "Beginner",
    requirements: [
      "Create two counters: counter state and counter ref, each with increment and decrement buttons.",
      "The counter state should update and reflect its value in the UI when incremented or decremented.",
      "The counter ref should update its value when incremented or decremented without triggering a UI update.",
      "After triggering a rerender with the counter state, the counter ref should show its updated value.",
    ],
    component: Counter,
  },
  {
    id: 2,
    slug: "toDoList",
    title: "To Do List",
    concepts: ["useState", "Array Methods", "Controlled Input"],
    description:
      "Create a simple ToDo list app with add, delete, complete, clear completed, and bulk task actions.",
    difficulty: "Beginner",
    requirements: [
      "Add new tasks: A task is added when submitting the form (pressing Enter in the input or clicking the Add button).",
      "Do not add empty or whitespace-only tasks.",
      "Clear the input after successfully adding a task.",
      "Display all tasks in a list and show an empty state when there are no tasks.",
      "Mark tasks as complete and toggle their completion status.",
      "Delete individual tasks.",
      "Show the number of remaining incomplete tasks.",
      "Display 'All tasks completed' when all tasks are complete.",
      "Clear all completed tasks: The Clear completed button should only appear if there are completed tasks.",
      "Complete all tasks: If at least one task is incomplete, the Complete All button should mark all tasks as completed.",
      "Toggle all tasks: If all tasks are completed, the button should mark all tasks as incomplete; otherwise, it should mark all tasks as completed.",
    ],
    component: ToDoList,
  },
];

export default challengesData;
