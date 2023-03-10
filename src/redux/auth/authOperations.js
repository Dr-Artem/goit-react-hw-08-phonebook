import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        console.log(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thinkApi) => {
        const state = thinkApi.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thinkApi.rejectWithValue();
        }
        try {
            token.set(persistedToken);
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }
);
