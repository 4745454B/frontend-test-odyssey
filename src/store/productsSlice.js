import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// sorting by
// a-z
// z-a
// low-high
// high-low

// filter by
// category
// price_max

const filterProducts = (products, { category, price_max, sortBy }) => {
    let filteredProducts = [...products];
    
    if (category) {
        filteredProducts = filteredProducts.filter((product) => product.category === category);
    }

    if (price_max) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.price <= price_max;
        });
    }

    const sortProducts = (a, b) => {
        if (sortBy === 'a-z') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'z-a') {
            return b.name.localeCompare(a.name);
        } else if (sortBy === 'low-high') {
            return a.price - b.price;
        } else if (sortBy === 'high-low') {
            return b.price - a.price;
        }
        else {
            return 0;
        }
    };

    filteredProducts = filteredProducts.sort(sortProducts);

    return filteredProducts;
}


export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ category, price_max, sortBy }) => {
    const response = await fetch(process.env.REACT_APP_PRODUCTS_API);
    const responseJson = await response.json();

    return filterProducts(responseJson.products, { category, price_max, sortBy });
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        currentPage: 1,
        productsPerPage: 12,
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = '';
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message;
        });
    },
});

export default productsSlice.reducer;