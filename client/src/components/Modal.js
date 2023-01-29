import React, { useEffect } from 'react'
import { ModalContent } from '../styles/Modal.styles';

const Modal = ({ closeModal, contentModal, modalStatus, permanentModal }) => {
    useEffect(() => {
        setTimeout(() => {
          closeModal();
        }, 4000);
        
      });
    
      return <ModalContent modalStatus={modalStatus} permanentModal={permanentModal} contentModal={contentModal}>{contentModal}</ModalContent>;
}

export default Modal