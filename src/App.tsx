import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue]=useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    //console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    //create Todos
    const newTodo: Todo ={
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit=()=>{
    
  }

  return (
    <div className="App">
      <div>
        <h2>ToDoList with Type Script</h2>
        <form onSubmit={(event)=>handleSubmit(event)}>
          <input 
            type="text"
            onChange={(event)=>handleChange(event)}
            className='inputText'
          />
          <input 
            type="submit"
            value="create"
            className='submitButton'
             />
        </form>
        <ul className='todoList'>
          {todos.map((todo)=>(
            <li key={todo.id}>
              <input
                type="text"
                onChange={(event)=>handleEdit(event)}
                className='inputText'
               />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
