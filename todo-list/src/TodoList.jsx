import React, { useState } from "react";

function TodoList() {
   const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
   const [newTask, setNewTask] = useState('');

   function handleInputChange(e) {
      setNewTask(e.target.value);
   }

   function addTask() {
      if (newTask.trim() !== '') {
         setTasks(t => [...t, newTask]);
         setNewTask('');
      }
   }

   function deleteTask(index) {
      setTasks(t => t.filter((_, i) => i !== index));
   }

   function moveTaskUp(index) {
      if (index > 0) {
         const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
         setTasks(updatedTasks);
      }
   }

   function moveTaskDown(index) {
      if (index < tasks.length - 1) {
         const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
         setTasks(updatedTasks);
      }
   }


   return (
      <div>
         <h1>Todo List</h1>
         <div>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>
               Add
            </button>
         </div>

         <ol>
            {tasks.map((task, index) =>
               <li key={index}>
                  <span>
                     {task}
                  </span>
                  <button onClick={() => deleteTask(index)}>
                     Delete
                  </button>

                  <button onClick={() => moveTaskUp(index)}>
                     Up
                  </button>

                  <button onClick={() => moveTaskDown(index)}>
                     Down
                  </button>
               </li>
            )}
         </ol>
      </div>
   );
}
export default TodoList;