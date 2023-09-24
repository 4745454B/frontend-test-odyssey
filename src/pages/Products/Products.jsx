import classes from './Products.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import Pagination from './components/Pagination/Pagination.jsx';
import { useState } from "react";
import { useSelector } from 'react-redux';
import RenderCategories from './components/RenderCategories/RenderCategories.jsx';
import RenderProducts from './components/RenderProducts/RenderProducts.jsx';

export default function Products() {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [category, setCategory] = useState(null);
    const [priceMax, setPriceMax] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const product = useSelector(state => state.product);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    return (
        <>
            <Header />
            Products
            <a href="/home">Home</a>
            
            <RenderCategories 
                handleCategoryChange={ handleCategoryChange }
            />

            <RenderProducts 
                priceMax={ priceMax } 
                selectedCategory={ category } 
                sortBy={ sortBy } 
                page={ page }
                itemsPerPage={ itemsPerPage }
            />

            <Pagination 
                itemsPerPage={ itemsPerPage } 
                totalItems={ product.products.length } 
                currentPage={ page } 
                setPage={ handlePageChange } 
            />
        </>
    )
}