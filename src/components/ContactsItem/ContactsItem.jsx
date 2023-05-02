import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdSave } from 'react-icons/md';
import {
  deleteContacts,
  updateContact,
} from 'redux/contacts/contactsOperation';
import {
  Name,
  Number,
  BtnIcon,
  Input,
  BtnWrapper,
  ContactsItemWrap,
  Form,
  ListWrap,
} from './ContactsItem.styled';

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
      Notiflix.Notify.success('Contact edited!');
    }
  };

  const onSubmit = e => {
    if (e.key !== 'Enter') {
      return;
    }
    handleEditContact();
  };
  return (
    <ContactsItemWrap>
      {isEdit ? (
        <Form onKeyDown={onSubmit}>
          <Input name="name" value={name} onChange={handleChange} type="text" />
          <Input
            name="number"
            value={number}
            onChange={handleChange}
            title="Edit phone number"
            type="tel"
          />
          <BtnWrapper>
            <BtnIcon type="button" onClick={handleEditContact}>
              {isEdit ? <MdSave size={'20'} /> : <MdEdit size={'20'} />}
            </BtnIcon>
            <BtnIcon type="button" onClick={handleDelete}>
              <MdDeleteForever size={'20'} />
            </BtnIcon>
          </BtnWrapper>
        </Form>
      ) : (
        <ListWrap>
          <Name>{name}</Name> <Number>{number}</Number>
          <BtnWrapper>
            <BtnIcon type="button" onClick={handleEditContact}>
              {isEdit ? <MdSave size={'20'} /> : <MdEdit size={'20'} />}
            </BtnIcon>
            <BtnIcon type="button" onClick={handleDelete}>
              <MdDeleteForever size={'20'} />
            </BtnIcon>
          </BtnWrapper>
        </ListWrap>
      )}
    </ContactsItemWrap>
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
