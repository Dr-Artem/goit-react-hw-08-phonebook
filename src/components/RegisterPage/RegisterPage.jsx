import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({ name, email, password }));
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                Username
                <input type="text" name="name" onChange={handleChange} />
            </label>
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
            <button type="submit">Register</button>
        </form>
    );
};
