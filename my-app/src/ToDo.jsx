import { useState } from "react";

function ToDo() {
    const [tasks, setTask] = useState(['test1', 'test2', 'test3']);
    const [newTask, setNewTask] = useState('');

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function addNewTask(event) {
        setNewTask(event.target.value);
    }

    function removeTask(index) {
        const removeTask = tasks.filter((_, i) => i !== index);
        setTask(removeTask);
    }

    function moveUp(index) {

        if (index > 0) {
            const moveUpTask = [...tasks];
            [[moveUpTask[index], moveUpTask[index - 1]]] = [[moveUpTask[index - 1], moveUpTask[index]]];
            setTask(moveUpTask)
        }

    }

    function moveDown(index) {
        if (index < tasks.length - 1) {
            const moveDownTask = [...tasks];
            [[moveDownTask[index], moveDownTask[index + 1]]] = [[moveDownTask[index + 1], moveDownTask[index]]];
            setTask(moveDownTask)
        }
    }

    return (<>
        <div className="to-do-container">
            <h2 className="title">To-Do List</h2>
            <div className="input-container">
                <input type="text" id="to-do-text" value={newTask} onChange={addNewTask} />
                <button className="add-button" onClick={() => addTask()}>Add</button>
            </div>
            <div className="list-cont">
                <ul className="to-do-list">
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="dlt" onClick={() => removeTask(index)}>Delete</button>
                            <button className="moveUp" onClick={() => moveUp(index)}>MoveUp</button>
                            <button className="moveDown" onClick={() => moveDown(index)}>MoveDown</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </>);
}

export default ToDo;