import Inferno from 'inferno'
import {Link} from 'inferno-router'

const ToDo = (props) => {
    const todos = ["Test", "hello woelds", "tesin lorem"]

    return (
        <div class="container-fluid list-view">
            <div class="col col-sm-3 sidebar"></div>
            <div class="col col-sm-9 main-content">
                <ul class="list-group">
                {
                    todos.map(t => <li class="list-group-item">{t}</li>)
                }
                </ul>
            </div>
        </div>
    )
}

export default ToDo;