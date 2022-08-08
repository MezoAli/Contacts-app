import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	contactsList: [],
};

const contactSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact(state, action) {
			state.contactsList.unshift(action.payload);
		},
		removeContact(state, action) {
			const tempArr = state.contactsList.filter((item) => {
				return item.name !== action.payload;
			});
			console.log(action.payload);
			console.log(tempArr);
			state.contactsList = tempArr;
		},
	},
});

export const contactsActions = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
