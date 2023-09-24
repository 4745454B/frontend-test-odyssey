import classes from './Products.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import Pagination from './components/Pagination/Pagination.jsx';
import { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import RenderCategories from './components/RenderCategories/RenderCategories.jsx';
import RenderProducts from './components/RenderProducts/RenderProducts.jsx';
import debounce from 'lodash/debounce.js'

export default function Products() {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [category, setCategory] = useState('all');
    const [priceMax, setPriceMax] = useState(1000);
    const [sortBy, setSortBy] = useState('high-low');

    const priceRangeRef = useRef();

    const product = useSelector(state => state.product);

    useEffect(() => {
        priceRangeRef.current.value = priceMax;
    }, []);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
        setPage(1);
    }

    const handleMaxPriceChange = debounce((e) => {
        setPriceMax(+e.target.value);
    }, 300);

    return (
        <>
            <Header />
            Products
            <a href="/home">Home</a>
            
            <RenderCategories 
                handleCategoryChange={ handleCategoryChange }
            />

            <input 
                id="price_range" 
                ref={ priceRangeRef }
                onChange={ handleMaxPriceChange } 
                type="range" 
                min={ 0 } 
                max={ 1000 } 
                step={ 10 }
            />
            <label htmlFor="price_range">${ priceMax }</label>

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