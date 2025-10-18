// 🔧 Core React
import React from 'react';

// 🧱 Components
import TaskList from '../components/TaskList';

// 🌓 Theme
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const todoStyleLight = `
  max-w-md mx-auto mt-10 p-4 
  bg-white shadow-[4px_4px_8px_#aeaeae,-4px_-4px_8px_#ffffff66] 
  rounded shadow`;
const todoStyleDark = `
  max-w-md mx-auto mt-10 p-4 
  bg-gray-800 text-white 
  shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#ffffff22] rounded`;
const inputTextStyleLight = `
  flex-1 px-4 py-2 rounded-lg 
  bg-[#efefef] text-gray-950 
  shadow-inner 
  focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-300`;
const inputTextStyleDark = `
  flex-1 px-4 py-2 rounded-lg
  bg-gray-950 text-white
  shadow-inner
  focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`;
const buttonStyleLight = `
  px-4 py-2 rounded-lg 
  bg-[#e0e0e0] text-gray-800 
  shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] 
  hover:bg-blue-500 hover:text-white hover:shadow-none 
  active:scale-95 transition-all duration-150`;
const buttonStyleDark = `
  px-4 py-2 rounded-lg
  bg-gray-600 text-white
  shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#ffffff22]
  hover:bg-blue-600 hover:text-white hover:shadow-none
  active:scale-95 transition-all duration-150`;


function ToDo() {
    const [task, setTask] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    const { theme } = useContext(ThemeContext);
    const buttonStyle = (theme === 'dark') ? buttonStyleDark : buttonStyleLight;
    const inputTextStyle = (theme === 'dark') ? inputTextStyleDark : inputTextStyleLight;
    const todoStyle = (theme === 'dark') ? todoStyleDark : todoStyleLight;


    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim()) {
            const newTask = {
                id: crypto.randomUUID(),
                text: task.trim(),
            }
            setTasks([...tasks, newTask])
            setTask('')
        }
    }

    const handleDeleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
    }

    return (
        <div className={todoStyle}>
            <h2 className="text-xl font-bold mx-auto w-fit mb-4">My Tasks</h2>
            <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
                <input
                    type="text"
                    className={inputTextStyle}
                    placeholder='new task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    type='submit'
                    className={buttonStyle}
                >Add</button>
            </form>
            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
        </div>
    )
}


export default ToDo