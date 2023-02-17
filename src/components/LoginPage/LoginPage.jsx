import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(login({ email, password }));
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                Email
                <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};
