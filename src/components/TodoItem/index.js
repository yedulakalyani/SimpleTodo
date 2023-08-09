// Write your code here
import './index.css'

const TodoItem = props => {
  const {toDetails, deleteTodo} = props
  const {id, title} = toDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-todo">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
