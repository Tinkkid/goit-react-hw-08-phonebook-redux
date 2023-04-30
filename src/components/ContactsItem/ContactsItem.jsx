import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  deleteContacts,
  updateContact,
} from 'redux/contacts/contactsOperation';
import { Name, Number, BtnDelete, BtnUpdate } from './ContactsItem.styled';

export const ContactsItem = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContacts(contact.id))
      .unwrap()
      .then(() => Notiflix.Notify.failure('Contact deleted'))
      .catch(() => Notiflix.Notify.warning('Something went wrong...:('));

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleEditContact = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
      dispatch(updateContact({ id: contact.id, name, number }));
    }
  };

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return;
    }
    handleEditContact();
  };
  return (
    <>
      {isEdit ? (
        <form onKeyDown={onSubmit}>
          <label>
            Name:
            <input
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
            />
          </label>
          <label>
            Number
            <input
              name="number"
              value={number}
              onChange={handleChange}
              title="Edit phone number"
              type="tel"
            />
          </label>
        </form>
      ) : (
        <>
          <Name>{name}:</Name> <Number>{number}</Number>
        </>
      )}
      <BtnDelete type="button" onClick={handleDelete}>
        Delete
      </BtnDelete>
      <BtnUpdate type="button" onClick={handleEditContact}>
        {isEdit ? <p>Close</p> : <p>Edit</p>}
      </BtnUpdate>
    </>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
