import React, { ChangeEvent, useState } from 'react'
interface ITask {
  taskName: string;
  deadline: number;
}
const Todo = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  // const completeTask = (taskNameToDelete: string): void => {
  //   setTodoList(
  //     todoList.filter((task) => {
  //       return task.taskName != taskNameToDelete;
  //     })
  //   );
  // };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
    console.log(todoList)
  };
  return (
    <>
    <div className='todo-form'>
      <form >
      <input
          required
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
            required={true}
          />
      </form>
        <button  onClick={addTask}>ADD TASK</button>
    </div>
    
    </>
  )
}

export default Todo