import React from 'react';
import ButtonComponent from '../button/button';
import Modal from 'react-modal';
import './modal.scss';

Modal.setAppElement('#root');

interface Props {
  showNotificationToast: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

function DeleteAllModal(props: Props, ref: any) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      outline: 'none',
      boxShadow: 'var(--modal-shadow)',
      border: 'none',
      maxWidth: '240px'
    }
  };


  function deleteAll() {
    props.showNotificationToast();
    props.closeModal();
  }

  return (
    <Modal isOpen={props.isModalOpen} onRequestClose={props.closeModal} style={customStyles} contentLabel="Hyde Modal">
      <div className="hyde-modal">
        <div className="hyde-modal__header">
          <h2 className="hyde-modal__header-text">
            Delete All
          </h2>
        </div>
        <div className="hyde-modal__sub-header">
          <p>Are you sure you want to delete all the hidden words in Hyde?</p>
        </div>
        <div className="hyde-modal__buttons">
          <div className="delete" onClick={deleteAll}>
            <ButtonComponent classes='secondary full danger active' type='text' label='Delete All' />
          </div>
          <div className="close" onClick={props.closeModal}>
            <ButtonComponent classes='secondary full' type='text' label='Close' />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteAllModal;