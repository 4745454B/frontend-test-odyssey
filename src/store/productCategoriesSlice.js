import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const CATEGORIES_URL = 'http://localhost/frontend-test-odyssey-api/?endpoint=categories';

export const fetchProductCategories = createAsyncThunk('productCategories/fetchProductCategories', async () => {
    const response = await fetch(CATEGORIES_URL);
    const responseJson = await response.json();
    return responseJson.categories;
});

const productCategoriesSlice = createSlice({
    name: "productCategories",
    initialState: {
        loading: false,
        categories: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductCategories.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
            state.error = '';
        });

        builder.addCase(fetchProductCategories.rejected, (state, action) => {
            state.loading = false;
            state.categories = [];
            state.error = action.error.message;
        });
    },
});

export default productCategoriesSlice.reducer;