import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [{
		name: "Salgadinho"
	}],
	total: 0
}

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		add: (state, action) => {},
		remove: (state, action) => {},
		edit: (state, action) => {}
	}
})

export const { add, remove, edit } = productSlice.actions;

export const useProductSelect = (state) => state.products;

export const productReducer = productSlice.reducer;
