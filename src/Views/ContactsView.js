import { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../Components/Form';
import Filter from '../Components/Filter';
import operations from '../redux/contacts/contacts-operations';
import Container from '../Components/Container';
import s from '../form.module.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container className={s.form__container} title="Phonebook">
        <Form onSubmit={this.props.onSubmit} />
        <Container className={s.list__container} title="Contacts">
          <Filter />
        </Container>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(operations.addContact(data)),
    fetchContacts: () => dispatch(operations.fetchContacts()),
  };
};
export default connect(null, mapDispatchToProps)(ContactsView);
