import Inferno from 'inferno'
import Component from 'inferno-component'
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'inferno-router'

import Navbar from './partials/Navbar'
import Desk from './Desk'
import { TodoList, TodoItem } from './ToDo'

import ListView from './ListView'
import FormView from './FormView'


const history = createHistory();

class App extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        history.push('/desk', {})
    }

    render() {
        return (
            <div class="app-container">
                <Navbar />
                { this.props.children }
            </div>
        );
    }
}

Inferno.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="/desk" component={Desk}/>
            <Route path="/List" component={ListView}>
                <Route path="/ToDo" component={TodoList}/>
            </Route>
            <Route path="/Form" component={FormView}>
                <Route path="/ToDo/:id" component={TodoItem}/>
            </Route>
        </Route>
    </Router>),
    document.querySelector('#app'));