import Contacts from 'pages/Contacts';
import Home from 'pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Layout } from './Layout/Layout';
import { LoginPage } from './LoginPage/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={<RegisterPage />}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute
                            redirectTo="/contacts"
                            component={<LoginPage />}
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute
                            redirectTo="/login"
                            component={<Contacts />}
                        />
                    }
                />
            </Route>
        </Routes>
    );
};
