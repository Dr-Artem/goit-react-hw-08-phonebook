import * as contactsApi from '../services/contacts-api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    '/contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactsApi.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const addContact = createAsyncThunk(
    '/contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const addedContact = await contactsApi.addContacts(contact);
            return addedContact;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            const deletedContact = await contactsApi.deleteContact(id);
            return deletedContact;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
