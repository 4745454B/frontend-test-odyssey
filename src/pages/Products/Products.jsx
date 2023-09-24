import classes from './Products.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import Product from './components/Product/Product.jsx'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice.js';
import { fetchProductCategories } from '../../store/productCategoriesSlice.js';

export default function Products() {
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceMax, setPriceMax] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(fetchProducts({
            page: page ?? 1,
            itemsPerPage: 12,
            category: selectedCategory ?? null,
            price_max: priceMax ?? null,
            sortBy: sortBy ?? null
        }));
        dispatch(fetchProductCategories());
    }, [page]);

    return (
        <>
            <Header />
            Products
            <a href="/home">Home</a>
            
            {category.loading && <div>Loading...</div>}
            {!category.loading && category.error ? <div>Error: { category.error }</div> : null}
            {!category.loading && category.categories.length ? (
                category.categories.map((category, index) => <div key={ index }>{ category.displayName }</div>)
            ) : null}

            {product.loading && <div>Loading...</div>}
            {!product.loading && product.error ? <div>Error: { product.error }</div> : null}
            {!product.loading && product.products.length ? (
                <div className={ classes.image_grid } >
                    {product.products.map((product, index) => 
                    <Product 
                        key={ `${product.name}_${index}` } 
                        name={ product.name ? product.name : null }
                        image={ product.image ? product.image : null }
                        category={ product.category ? product.category : null }
                        price={ product.price ? product.price : null }
                        description={ product.description ? product.description : null }
                    />)}
                </div>
            ) : null}
        </>
    )
}