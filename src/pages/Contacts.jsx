// import { ContactsTitle, Title } from 'components/App/App.styled';
import { ContactsTitle, MainSection, Title } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm /ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
// import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { selectContacts } from 'redux/contacts/selectors';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const showContacts = contacts.lenght !== 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainSection>
      <Title>MY PHONEBOOK</Title>
      <ContactForm />
      {contacts.length > 0 && <ContactsTitle> Contacts </ContactsTitle>}
      <Filter />
      <ContactList />
    </MainSection>
  );
}
