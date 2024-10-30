// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, onDeleteUser} = props
  const {title} = userDetails

  const onChangeDetailsList = () => {
    onDeleteUser(userDetails.id)
  }

  return (
    <li className="item">
      <p className="item-para">{title}</p>
      <button type="button" className="button" onClick={onChangeDetailsList}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
