export default function Header() {
    return <header id="ps-header" className="bg-blue">
        <div className="container">
            <nav className="d-flex align-items-center">
                <div className="ps-logo d-flex align-items-center">
                    <div className="thumb">
                        <a><img src="images/Favicon.svg" alt="Nayya" /></a>
                        <span className="count dbl-digit">9+</span>
                    </div>
                    <div className="logo-title">
                        <a>My Benefits<br/>Concierge</a>
                    </div>
                </div>
                <ul className="ps-navbar mr-auto d-flex">
                    <li className="active">
                        <a>Pharmacy<br/>Savings</a>
                    </li>
                    <li>
                        <a>Claim<br/>Opportunities</a>
                    </li>
                    <li>
                        <a>Find Care<br/>In-Network</a>
                    </li>
                </ul>

                <ul className="ps-navbar ml-auto d-flex align-items-center">
                    <li>
                        <a data-toggle="tooltip" data-placement="bottom" title="View my Cards and Plans"><img src="images/notification.svg" alt=""/></a>
                    </li>
                    <li>
                        <a className="user-name"><span>j</span> <span className="mob-hidden">Caravel Autism Health</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}