import {useState} from 'react'

import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

const SimpleTodos = () => {
  const [todos, setTodos] = useState(initialTodosList)
  const [inputValue, setInputValue] = useState('')

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      const match = inputValue.trim().match(/(\D+)(\d+)$/)

      if (match) {
        const text = match[1].trim()
        const count = parseInt(match[2], 10) || 1

        const newTodos = Array.from({length: count}, (_, index) => ({
          id: todos.length + index + 1,
          title: `${text} ${index + 1}`,
        }))

        setTodos(prevTodos => [...prevTodos, ...newTodos])
      } else {
        const newTodo = {
          id: todos.length + 1,
          title: inputValue.trim(),
        }

        setTodos(prevTodos => [...prevTodos, newTodo])
      }

      setInputValue('')
    }
  }

  const handleDelete = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const handleUpdate = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, title: newText} : todo,
      ),
    )
  }

  const onChangeInput = event => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <h1>Simple Todos</h1>

      <input type="text" value={inputValue} onChange={onChangeInput} />
      <button type="button" onClick={handleAddClick}>
        Add
      </button>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  )
}

export default SimpleTodos
