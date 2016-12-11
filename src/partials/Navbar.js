import Inferno from 'inferno'
import { Link } from 'inferno-router'

const Navbar = () => {
    return (
        <div class="navbar-container">
            <div class="container">
                <Link to="/desk">
                    <img style="width:24px;margin-top:4px"
                        src="https://demo.erpnext.com/assets/erpnext/images/erp-icon.svg"/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;