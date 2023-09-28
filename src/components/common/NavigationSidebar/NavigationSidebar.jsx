import './NavigationSidebar.module.scss'

export default function NavigationSidebar() {
    return (
        <aside>
            <nav>
                <ul>
                    <li><a href="/home"><img title="Home" src="./svgs/home.svg" alt="Home" /></a></li>
                    <li><a href="/products"><img title="Products" src="./svgs/products.svg" alt="Products" /></a></li>
                </ul>
            </nav>
        </aside>
    )
}