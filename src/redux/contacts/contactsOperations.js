import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
    '/contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const addContact = createAsyncThunk(
    '/contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const addedContact = await axios.post('/contacts', contact);
            return addedContact.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const deletedContact = await axios.delete(`/contacts/${id}`);
            return deletedContact.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const contactsOperations = {
    fetchContacts,
    addContact,
    deleteContact,
};
export default contactsOperations;
