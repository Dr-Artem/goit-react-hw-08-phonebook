import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const stateFilter = useSelector(state => state.filter);

    const getFilteredPerson = () => {
        const normalisedFilter = stateFilter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalisedFilter)
        );
    };
    return (
        <ul>
            {getFilteredPerson().map(({ id, name, number }) => {
                return (
                    <li key={id} id={id}>
                        {name}: {number}
                        <button
                            onClick={() =>
                                dispatch(contactsOperations.deleteContact(id))
                            }
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
