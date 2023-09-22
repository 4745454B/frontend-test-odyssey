import './Home.module.scss'
import Header from "../../components/common/Header/Header.jsx";

export default function Home() {
    return (
        <>
            <Header />
            Home
            <a href="/products">Products</a>
        </>
    )
}