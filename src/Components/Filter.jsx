import s from '../form.module.css'
import Contact from './Contact'
import { v4 as randomID } from 'uuid';
import { connect } from 'react-redux';
import * as actions from '../redux/contacts/contacts-actions'
import * as selectors from '../redux/contacts/contacts-selectors'
import operations from '../redux/contacts/contacts-operations'

const Filter = ({ getFilter, onDeleteContact, filteredContacts, isLoading }) =>
(<>
    <label htmlFor="filter">Search contact by number or name</label>
    {isLoading && <h2>LOADING...</h2>}
    <br />
    <input
        type="text"
        name="filter"
        id="filter"
        onChange={(e) => getFilter(e.currentTarget.value)} />
    <ul className={s.form}>
        {filteredContacts.map(({ id, name, number }) => {
            return <Contact key={randomID()} id={id} name={name} number={number} onDeleteContact={() => {
                onDeleteContact(id)
            }} s={s} />
        })}
    </ul>
</>
)


const mapStateToProps = state => {
    return {
        filteredContacts: selectors.getFilteredContacts(state),
        isLoading: selectors.getLoading(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteContact: id => dispatch(operations.deleteContact(id)),
        getFilter: value => dispatch(actions.getFilter(value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
