import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pages: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels']
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {}
})

export const selectPages = state => state.page.pages

export default pageSlice.reducer