import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      {error && error}
      {contacts.length > 0 ? <ContactList /> : <Message />}
    </div>
  );
};

export default ContactsPage;
