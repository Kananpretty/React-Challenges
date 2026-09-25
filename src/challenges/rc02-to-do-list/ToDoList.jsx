import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const allCompleted = tasks.every((task) => task.completed);
  const remainingTasks = tasks.filter((task) => !task.completed).length;
  const hasCompletedTasks = tasks.some((task) => task.completed);

  const addTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      taskText: taskInput,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTaskInput("");
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === taskId
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== taskId),
    );
  };

  const clearCompleted = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => !prevTask.completed),
    );
  };

  const toggleCompletedTasks = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        completed: !allCompleted,
      })),
    );
  };

  return (
    <div className="todo-demo">
      <div className="todo-card">
        <header className="todo-header">
          <h3 className="todo-card__title">To Do List</h3>
          <p className="todo-card__subtitle">
            Keep track of what you need to get done.
          </p>
        </header>

        <section className="todo-section">
          <h4 className="todo-section__title">My Tasks</h4>

          <form className="todo-form" onSubmit={addTask}>
            <label htmlFor="task-input" className="todo-form__label">
              Add a new task
            </label>
            <div className="todo-form__row">
              <input
                type="text"
                id="task-input"
                name="task"
                placeholder="What needs to be done?"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
              <button type="submit" className="todo-add-button">
                Add
              </button>
            </div>
          </form>

          <div className="todo-list-wrapper">
            {tasks.length === 0 ? (
              <div className="todo-empty-state" aria-live="polite">
                <p className="todo-empty-state__message">No tasks added</p>
              </div>
            ) : (
              <>
                <p className="todo-summary">
                  {allCompleted
                    ? "All tasks completed"
                    : `${remainingTasks} tasks remaining`}
                </p>
                <ul className="todo-list">
                  {tasks.map((task) => {
                    return (
                      <li
                        className={`todo-item ${task.completed ? "completed" : ""}`}
                        key={task.id}
                      >
                        <label className="todo-label">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                          />
                          <span>{task.taskText}</span>
                        </label>
                        <button
                          type="button"
                          className="delete-button"
                          onClick={() => deleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="task-actions">
                  {hasCompletedTasks && (
                    <button
                      type="button"
                      className="clear-button"
                      onClick={clearCompleted}
                    >
                      Clear completed
                    </button>
                  )}
                  <button
                    type="button"
                    className="clear-button"
                    onClick={toggleCompletedTasks}
                  >
                    {remainingTasks !== 0 ? "Complete All" : "Incomplete All"}
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToDoList;
