import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContacts } from 'redux/contacts/contactsOperation';
import { Name, Number, BtnDelete } from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContacts(id))
      .unwrap()
      .then(() => Notiflix.Notify.failure('Contact deleted'))
      .catch(() => Notiflix.Notify.warning('Something went wrong...:('));

  return (
    <>
      <Name>{name}:</Name> <Number>{number}</Number>
      <BtnDelete id={id} type="button" onClick={handleDelete}>
        Delete
      </BtnDelete>
    </>
  );
};
