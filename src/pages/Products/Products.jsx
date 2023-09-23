import classes from './Products.module.scss'
import Header from "../../components/common/Header/Header.jsx";
import Product from './components/Product/Product.jsx'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice.js';
import { fetchProductCategories } from '../../store/productCategoriesSlice.js';

export default function Products() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchProductCategories());
    }, []);

    return (
        <>
            <Header />
            Products
            <a href="/home">Home</a>
            
            {category.loading && <div>Loading...</div>}
            {!category.loading && category.error ? <div>Error: { category.error }</div> : null}
            {!category.loading && category.categories.length ? (
                category.categories.map(category => <div>{ category }</div>)
            ) : null}

            {product.loading && <div>Loading...</div>}
            {!product.loading && product.error ? <div>Error: { product.error }</div> : null}
            {!product.loading && product.products.length ? (
                product.products.map(product => <Product image={product.image} />)
            ) : null}
        </>
    )
}