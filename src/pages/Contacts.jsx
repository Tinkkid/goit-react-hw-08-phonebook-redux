// import { ContactsTitle, Title } from 'components/App/App.styled';
import { ContactsTitle, MainSection, Title } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm /ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <MainSection>
      <Title>MY PHONEBOOK</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      {isLoading && !error && <Loader />}
      <Filter />
      <ContactList />
    </MainSection>
  );
}
