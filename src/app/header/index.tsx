import Search from "../search";

export default function Header() {
    return (
        <header>
            <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">New Items</a></li>
            </ul>
            <Search />
            <ul>
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