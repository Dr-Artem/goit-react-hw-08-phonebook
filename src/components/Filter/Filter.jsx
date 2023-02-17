import { useDispatch } from 'react-redux';
import { change } from 'redux/filter/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const changeValue = event => {
        dispatch(change(event.target.value));
    };
    return (
        <label>
            <span>Find contacts by name</span>
            <input type="text" name="filter" onChange={changeValue} />
        </label>
    );
};
