import React from 'react';
import PropTypes from 'prop-types';

import { ContList, DeleteBtn } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContList>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>
          <span> : </span>
          <span>{number}</span>
                   <DeleteBtn type="button" onClick={() => deleteContact(id)}>
            Delete
          </DeleteBtn>
        </li>
      ))}
    </ContList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactsList;
