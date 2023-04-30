import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { List, Item } from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactsItem key={contact.id} contact={contact} />
          </Item>
        );
      })}
    </List>
  );
};
