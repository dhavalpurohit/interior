import Search from "../search";

export default function Header(prop: any) {
    const ontoggleClassFun = () => {
        prop.ontoggleClass()
    }
    return (
        <header>
            <div className="menu-toggle" onClick={ontoggleClassFun}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z" clip-rule="evenodd" /></svg>
            </div>
            <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">New Items</a></li>
            </ul>
            <Search />
            <ul className="header-icon">
                <li>
                    <a href="#" className="bell-dot">
                        <img src="/bell.svg" alt="bell" width={30} height={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/shopping-bag.svg" alt="shopping-bag" width={30} height={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/log-in.svg" alt="log-in" width={30} height={30} />
                    </a>
                </li>
            </ul>
        </header>
    )
}