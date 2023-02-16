import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactList = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <ul className={style.list}>
            {data.map(({ id, name, phone }) => {
                return (
                    <li key={id} id={id} className={style.list_item}>
                        {name}: {phone}
                        <button onClick={() => dispatch(deleteContact(id))}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

ContactList.propTypes = {
    data: PropTypes.array.isRequired,
};
