import PropTypes from 'prop-types';
import { ContactStyle } from './ContactStyle.styled';
import { ImBin } from 'react-icons/im';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';

export function Contact({ number, name, id, deleteContact }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contact = {
    number,
    name,
    id,
  };
  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <>
      <ContactStyle id={id}>
        <p onClick={() => toggleModal()}>{`${name}: ${number}`}</p>
        <ImBin className="delete-icon" onClick={() => deleteContact(id)} />
      </ContactStyle>
      {isModalOpen && <Modal closeModal={toggleModal} contact={contact} />}
    </>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
