// 🌓 Theme
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ulStyleLight=`
    bg-[#e0e0e0] p-2 rounded-md my-4 
    shadow-[inset_8px_8px_16px_#bababa,inset_-8px_-8px_16px_#ffffff]`;
const ulStyleDark=`
    bg-gray-800 p-2 rounded-md my-4
    shadow-[inset_8px_8px_16px_#1a1a1aee,inset_-8px_-8px_16px_#ffffff22]`;
const liStyleLight=`
    flex justify-between items-center
    bg-[#fafafa] p-2 m-2 rounded-lg
    shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff66]`;
const liStyleDark=`
    flex justify-between items-center
    bg-gray-800 p-2 m-2 rounded-lg
    shadow-[4px_4px_8px_#1a1a1a,-4px_-4px_8px_#88888822]`;


function TaskList({tasks, handleDeleteTask}) {
    const { theme } = useContext(ThemeContext);

    const liStyle = (theme === 'dark') ? liStyleDark : liStyleLight;
    const ulStyle = (theme === 'dark') ? ulStyleDark : ulStyleLight;


    if (tasks.length === 0) {
        return <p className="bg-[#fafafa22] p-4 rounded-md my-4 ">No tasks yet. Please add one!</p>
    }

    return (
        <ul className={ulStyle}>
            {tasks.map((task) => (
                <li key={task.id} className={liStyle}>
                    {task.text}
                    <button onClick={() => handleDeleteTask(task.id)} className="cursor-pointer">🗑️</button>  {/*handleDeleteTask is in ToDo and passed via props*/}
                </li>
            ))}
        </ul>
    )
}

export default TaskList