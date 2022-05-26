import PropTypes from 'prop-types';
import { ContactStyle } from './ContactStyle.styled';
import { ImBin } from 'react-icons/im';

export function Contact({ number, name, id, deleteContact }) {
  return (
    <ContactStyle id={id}>
      <p>{`${name}: ${number}`}</p>
      <ImBin className="delete-icon" onClick={() => deleteContact(id)} />
    </ContactStyle>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
