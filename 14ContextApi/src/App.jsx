import { useState, useEffect } from "react"
import { TodoContext, useTodo, TodoProvider } from "./contexts/index"
import { TodoForm, TodoItem } from "./component/index"

function App() {
  
  const [ todos, setTodos ] = useState([]);

  const addTodo = (todo) => {
     // [...prev, todo] and can also add todo at first [todo, ...prev]
      setTodos(prev => [{id: Date.now(), ...todo}, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos(prev => prev.map((prevTodo) => (
        prevTodo.id === id? {...prevTodo, todo}: prevTodo
    )));   // why don't we just do prevTodo.todo = todo, answer: Because React state should never be mutated directly. Instead, we return a new object to trigger proper re-rendering.
  }

  const deleteTodo = (id) => {
      setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id))
  }

  // map() should always return an element for each item — you're mutating the array inside map, which defeats the purpose.
// splice() mutates the original array (which we shouldn't do in React state).
// Also, you're not returning anything inside the ternary.

  // const deleteTodo = (id) => {
  //   setTodos(prev => prev.map((prevTodo, index) => {
  //         prevTodo.id === id? prev.splice(index, 1): prevTodo
  //   }));
  // }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map((prevTodo) => ( // Here i used curly braces insted of () and cuz of that i must've done return inside, but i didn't and cuz of that it threw an error, which took me a lot of time to debugg. 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo
    )))
  }

  // This is also incorrect cuz i m supposed to return either the same todo or a newtodo but my fxn returns bool vlaue i.e. !prevTodo.completed when the condition is satisfied for other indexes it reutrn an object.
  // const toggleComplete = (id) => {
  //   setTodos(prev => prev.map((prevTodo) => {
  //       prevTodo.id === id? !prevTodo.completed: prevTodo
  //   }))
  // }

  
  // Now let's use local storage of the browser to store todos there, so they can persist even if u reload the page.

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0) {
        setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete, useTodo}}> 
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-col flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map(todo => (
                             <div key={todo.id} className="w-full" > 
                              <TodoItem todo={todo} />
                             </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
