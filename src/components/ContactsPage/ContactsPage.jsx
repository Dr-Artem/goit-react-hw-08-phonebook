import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

export const ContactsPage = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm contactsList={contacts} />

            <h2>Contacts</h2>
            {/* <Filter /> */}
            {/* {isLoading && <p>Loading...</p>} */}
            {contacts && <ContactList data={contacts} />}

            {/* {contacts && !isLoading && (
                <ContactList data={getFilteredPerson()} />
            )} */}
        </div>
    );
};
