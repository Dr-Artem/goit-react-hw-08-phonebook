import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = event.target.elements;

        const person = {
            name: name.value,
            number: number.value,
        };
        checkForDuplicates(person)
            ? alert(`${person.name} is already in contacts`)
            : dispatch(contactsOperations.addContact(person));
        event.target.reset();
    };

    const checkForDuplicates = person =>
        contacts.some(
            contact => contact.name.toLowerCase() === person.name.toLowerCase()
        );

    return (
        <form onSubmit={handleSubmit} id="form">
            <label>
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                <span>Number</span>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>

            <button type="submit">Add contact</button>
        </form>
    );
};
