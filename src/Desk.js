import Inferno from 'inferno'
import {Link} from 'inferno-router'

const Desk = (props) => {

    const icons = [
        {
            icon: 'calendar',
            style: {
                background: '#fff5a7',
                color: '#36414C'
            },
            route: "List/ToDo"
        },
        {
            icon: 'tree',
            style: {
                background: '#7578f6',
                color: '#fafbfc'
            },
            route: "Modules"
        }
    ]

    return (
        <div class="desk-container">
            <section class="container">
                {
                    icons.map(i =>
                        <Link to={i.route}>
                            <div class="desk-icon" style={i.style}>
                                <span class={"fa fa-2x fa-" + i.icon}></span>
                            </div>
                        </Link>
                    )
                }
            </section>
        </div>
    )
}

export default Desk;