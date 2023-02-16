import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsSlice';
import contactsReducer from './contacts/contactsReducer';
import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice.reducer,
    },
});
