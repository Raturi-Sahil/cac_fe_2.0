import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    
    const [ todo, setTodo ] = useState("");
    const {addTodo} =  useTodo(); // here the addTodo is gonna be destructred using an array cuz the context also has an object of items { todos, addTodo, ... }
    
    const add = (e) => {
        e.preventDefault();
        if(!todo) return;
        addTodo({todo, completed: false});
    }
    
    /** we could also have done this i think. 
     * onSubmit={e => {e.preventDefault(); addTodo(JSON.parse(todo));}} */

    return (
        <form  
        className="flex"
        onSubmit={add}
        >
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo} // this is called wiring input with state.
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button 
            type="submit" 
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

