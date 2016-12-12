import Inferno from 'inferno'
import Component from 'inferno-component'
import { Router, Route } from 'inferno-router'

import Sidebar from './Sidebar'

export default class FormView extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div class="list-container">
                <Sidebar />
                <div class="main-content">
                { this.props.children }
                </div>
            </div>
        );
    }
}