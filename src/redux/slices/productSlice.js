import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [],
	total: 0
}

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const product = {
				id: Math.random(),
				name: action.payload.name
			};

			state.list.push(product);
		},
		removeProduct: (state, action) => {
			const listWithRemovedProduct = state.list.filter((item) => (
				item.id !== action.payload.id && item
			));

			state.list = listWithRemovedProduct;
		},
		editProduct: (state, action) => {
			const listWithEditedProduct = state.list.filter((item) => {
				if (item.id === action.payload.id) {
					item.name = action.payload.name;
				}

				return item;
			});

			state.list = listWithEditedProduct;
		}
	}
})

export const { addProduct, removeProduct, editProduct } = productSlice.actions;

export const useProductSelect = (state) => state.products;

export const productReducer = productSlice.reducer;
