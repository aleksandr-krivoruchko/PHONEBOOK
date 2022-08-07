import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import { Overlay, ModalStyle, CloseButton } from './Modal.styled';
import { ModalForm } from './ModalForm';

export const Modal = ({ contact, closeModal }) => {
  useEffect(() => {
    const closeModalOnEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', closeModalOnEsc);
    return () => {
      document.removeEventListener('keydown', closeModalOnEsc);
    };
  }, [closeModal]);

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  }
  return ReactDOM.createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyle>
        <CloseButton type="button" onClick={closeModal}>
          x
        </CloseButton>
        <ModalForm contact={contact} />
      </ModalStyle>
    </Overlay>,

    document.getElementById('popup-root')
  );
};
