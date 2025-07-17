import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState =  {
    todos : [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "todo", // name property should be same but value can be different. It represents the name fo this particular slice.
    initialState, // either u define it above or create it here. 
    reducers: { // Reducers contain properties and functions. U can even define the fxn outside the todoSlice and can pass it's reference here. 

        addTodo: (state, action) => { // state is what gives to access to the initialState and action is where the caller identity provides values, say if request for deletion then a key will come in payload of action. 
            const todo = {
                id: nanoid(),
                text: action.payload // Payload is an object and values can be extracted from it using payload.
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {    
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        //why did we destructure in contextApi whille adding, deleting or updating the todo: Because React state should never be mutated directly. Instead, we return a new object to trigger proper re-rendering.
        // But here we are not doing that, no need for any kind of spread. 

        updateTodo: (state, action) => {
            const { id, newtext } = action.payload;
            const todo = state.todos.find(t => t.id === id);
            if (todo) {
                todo.text = newtext;
            }
        }

        //In Redux Toolkit, mutations are allowed inside reducers because of Immer, which handles all mutations safely and immutably behind the scenes.

    }
});

//Gotta do two exports

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
// Individual exports cuz they would be used inside the components.

export default todoSlice.reducer // since it's default it's name in store.js during import can be differnt, we have kept it as todoReducer.
//This we do for the store we have created cuz the store is restricted variable and can't be update by just anyone. so we export it here 
//and then import it inside the store. 