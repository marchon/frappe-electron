import Inferno from 'inferno'
import { Link } from 'inferno-router'

const todos = [
    {id: 1, content: "Test"},
    {id: 2, content: "hello woelds"},
    {id: 3, content: "tesin lorem"}
]

const get_todo = (id) => todos.filter(t => t.id === id)[0];

export const TodoList = (props) => {

    return (
        <div class="todo-container">
            <h3>ToDo</h3>
            <ul class="list-items">
            {
                todos.map(t =>
                    <li class="list-item">
                        <Link to={"/Form/ToDo/"+t.id}>
                            {t.content}
                        </Link>
                    </li>
                )
            }
            </ul>
        </div>
    )
}

export const TodoItem = ({params}) => {
    
    const todo = get_todo(params.id);
    console.log(todo)
    return (
        <div class="form-todo">
            <div class="todo-item">
                {todo.content}
                {
                    
                }
            </div>
        </div>
    )
}