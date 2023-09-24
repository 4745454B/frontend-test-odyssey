import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(process.env.REACT_APP_PRODUCTS_API);
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