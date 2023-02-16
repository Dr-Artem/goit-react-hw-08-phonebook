import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../redux/contacts/contactsOperations';
import { getContacts, getIsLoading } from '../redux/contacts/contactsSelector';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import style from './App.module.css';

export const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getIsLoading);
    const stateFilter = useSelector(state => state.filter);

    const getFilteredPerson = () => {
        const normalisedFilter = stateFilter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalisedFilter)
        );
    };

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <div className={style.main_section}>
            <h1>Phonebook</h1>
            <ContactForm contactsList={contacts} />

            <h2>Contacts</h2>
            <Filter />
            {isLoading && <p>Loading...</p>}
            {contacts && !isLoading && (
                <ContactList data={getFilteredPerson()} />
            )}
        </div>
    );
};
