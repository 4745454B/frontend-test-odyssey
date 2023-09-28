import classes from './RenderProducts.module.scss'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/Product.jsx";
import { fetchProducts } from "../../../../store/productsSlice.js";

export default function RenderProducts({ selectedCategory, priceMax, sortBy, page, itemsPerPage }) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProducts({
            category: selectedCategory ?? null,
            price_max: priceMax ?? null,
            sortBy: sortBy ?? null
        }));
    }, [page, selectedCategory, priceMax, sortBy, itemsPerPage])

    // Calculate the range of products to display based on the current page and items per page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = product.products.slice(startIndex, endIndex);

    return (
        <>
            {product.loading && <div className={ classes.loading }>Loading...</div>}
            {!product.loading && product.error ? <div className={ classes.error }>Error: { product.error }</div> : null}
            {!product.loading && !product.error && product.products.length ? (
                <div className={ classes.image_grid } >
                    {displayedProducts.map((product, index) =>
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
    );
}