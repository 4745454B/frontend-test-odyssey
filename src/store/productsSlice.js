import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const PRODUCTS_URL = 'http://localhost/frontend-test-odyssey-api/?endpoint=products';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(PRODUCTS_URL);
    const responseJson = await response.json();
    return responseJson.products;
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
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