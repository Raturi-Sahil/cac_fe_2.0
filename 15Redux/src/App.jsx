import AddTodo from "./components/AddTodo.jsx"
import Todo from "./components/Todo.jsx"

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App


/**
 * we can include the provider wrapper here or in the main.jsx as well. It's just personal choice either u put it at the top level element or second top level element. We have put it in the main.jsx
 */