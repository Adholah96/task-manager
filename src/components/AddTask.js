export const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
    };
    setTasklist([...taskList, newTask]);
    e.target.task.value = '';
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="add task"
          name="task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
