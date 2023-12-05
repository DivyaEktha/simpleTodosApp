import {useState} from 'react'

const TodoItem = ({todo, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.title)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    onUpdate(todo.id, editedText)
    setIsEditing(false)
  }

  const handleInputChange = e => {
    setEditedText(e.target.value)
  }

  return (
    <div>
      {isEditing ? (
        // Show the input field and "Save" button when in edit mode
        <>
          <input type="text" value={editedText} onChange={handleInputChange} />
          <button type="button" onClick={handleSaveClick}>
            Save
          </button>
        </>
      ) : (
        // Show the todo text, "Edit" button, and "Delete" button when not in edit mode
        <>
          <p>{todo.title}</p>
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
          <button type="button" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default TodoItem
