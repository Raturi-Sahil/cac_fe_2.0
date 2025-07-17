import { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
    
    const [ isTodoEditable, setIsTodoEditable ] = useState(false);
    const [ todoMsg, setTodoMsg ] = useState(todo.todo);
    
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => { // i think we can use the callback here to avoid re-rendering the same todo on . 
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsTodoEditable(!isTodoEditable);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return; // Though we have disabled field why use this??. Cuz it double-checks in JavaScript to ensure that even if someone manually enables the disabled button using DevTools or a script, the action still won’t happen.

                    if (isTodoEditable) { // Save mode: updates the todo and exits edit mode
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);  // Edit mode: enables editing
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
