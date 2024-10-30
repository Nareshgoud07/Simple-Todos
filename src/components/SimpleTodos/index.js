import {Component} from 'react'
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

// Write your code here

class SimpleTodos extends Component {
  state = {userDetailsList: initialTodosList}

  onDeleteUser = userId => {
    const {userDetailsList} = this.state
    const remainingDetailsList = userDetailsList.filter(
      each => each.id !== userId,
    )
    this.setState({userDetailsList: remainingDetailsList})
  }

  render() {
    const {userDetailsList} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {userDetailsList.map(eachUser => (
              <TodoItem
                userDetails={eachUser}
                key={eachUser.id}
                onDeleteUser={this.onDeleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
