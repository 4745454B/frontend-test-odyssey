import classes from './Products.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import Pagination from './components/Pagination/Pagination.jsx';
import { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import RenderCategories from './components/RenderCategories/RenderCategories.jsx';
import RenderProducts from './components/RenderProducts/RenderProducts.jsx';
import debounce from 'lodash/debounce.js'
import NavigationSidebar from '../../components/common/NavigationSidebar/NavigationSidebar.jsx';

export default function Products() {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [category, setCategory] = useState('all');
    const [priceMax, setPriceMax] = useState(1000);
    const [sortBy, setSortBy] = useState('high-low');

    const priceRangeRef = useRef();
    const sortByRef = useRef();
    const categoriesRef = useRef();

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
        setPage(1);
    }, 300);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    const handleClearAllFilters = () => {
        setPage(1);
        setCategory('all');
        setPriceMax(1000);
        setSortBy('high-low');
        priceRangeRef.current.value = 1000;
        sortByRef.current.value = 'high-low';
        categoriesRef.current.value = 'all';
    }

    return (
        <>    
            <main>

                <div className={ classes.filters }>
                    <RenderCategories 
                        ref={ categoriesRef }
                        handleCategoryChange={ handleCategoryChange }
                    />

                    <span className={ classes.price_range }>
                        <input 
                            title="Set Max Price"
                            id="price_range" 
                            ref={ priceRangeRef }
                            onChange={ handleMaxPriceChange } 
                            type="range" 
                            min={ 0 } 
                            max={ 1000 } 
                            step={ 10 }
                        />
                        <label htmlFor="price_range">${ priceMax }</label>
                    </span>

                    <select title="Sort By" ref={ sortByRef } defaultValue={ sortBy } onChange={ handleSortChange }>
                        <option value="high-low">Descending</option>
                        <option value="low-high">Ascending</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>

                    <button className={ classes.clear_filters_button } onClick={ handleClearAllFilters }>Clear All Filters</button>
                </div>

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
            </main>
        </>
    )
}