import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from 'app.module.css';

export default function ContactsView() {
  return (
    <div className={s.container}>
      <h1 className={s.main_header}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.contacts_header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
