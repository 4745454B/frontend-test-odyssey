import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategories } from '../../../../store/productCategoriesSlice.js'

export default function RenderCategories({ handleCategoryChange }) {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(fetchProductCategories());
    }, []);

    const handleCategory = (e) => {
        handleCategoryChange(e.target.value);
    }
    
    return (
        <>
            {category.loading && <div>Loading...</div>}
            {!category.loading && category.error ? <div>Error: { category.error }</div> : null}
            {!category.loading && category.categories.length ? (
                <select onChange={ handleCategory } defaultValue="all">
                    <option value="all">All</option>
                    {category.categories.map((category, index) => 
                        <option key={ index } value={ category.category }>{ category.displayName }</option>
                    )}
                </select>
            ) : null}
    
        </>
    )
}