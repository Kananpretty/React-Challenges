import Counter from "../challenges/rc01-counter/Counter";

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
];

export default challengesData;
