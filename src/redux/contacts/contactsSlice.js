import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from 'redux/contacts/contactsOperations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [contactsOperations.fetchContacts.pending](state, action) {
            state.isLoading = true;
            state.error = null;
        },
        [contactsOperations.fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [contactsOperations.fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [contactsOperations.addContact.pending](state, action) {
            state.isLoading = true;
            state.error = null;
        },
        [contactsOperations.addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state = state.items.push(action.payload);
        },
        [contactsOperations.addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [contactsOperations.deleteContact.pending](state, action) {
            state.isLoading = true;
            state.error = null;
        },
        [contactsOperations.deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => {
                return contact.id !== action.payload.id;
            });
        },
        [contactsOperations.deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [contactsOperations.deleteContact.finally](state, action) {
            state.error = null;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
