import Inferno from 'inferno'

const Sidebar = (props) => {
    const items = ["Reports", "Tags"]

    return (
        <div class="col col-sm-3 sidebar">
            {
                items.map((i) => <div class="sidebar-item">{i}</div>)
            }
        </div>
    )
}

export default Sidebar;