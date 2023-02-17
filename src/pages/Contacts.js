import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/contactsSelector';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <h1 title="Phonebook">Phonebook</h1>
            <ContactForm />

            <Filter />

            <h2 title="Contacts">Contacts</h2>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <ContactList />}
        </div>
    );
};

export default Contacts;
