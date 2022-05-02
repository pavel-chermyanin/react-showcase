
const Header = () => {
    return (
        <nav className="blue lighten-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo header-logo">
                    React Showcase
                </a>
                <ul
                    id="nav-mobile"
                    className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Repo</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export { Header }