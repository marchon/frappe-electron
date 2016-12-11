import Inferno from 'inferno'
import Component from 'inferno-component'
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'inferno-router'

import Navbar from './partials/Navbar'
import Desk from './Desk'
import ToDo from './ToDo'

const history = createHistory();
console.log(history)

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
            <Route path="desk" component={Desk}/>
            <Route path="List/ToDo" component={ToDo}/>
        </Route>
    </Router>),
    document.querySelector('#app'));