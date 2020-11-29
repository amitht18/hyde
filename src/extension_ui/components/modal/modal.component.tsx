import React, { useState, ChangeEvent } from 'react';
import ButtonComponent from '../button/button';
import Modal from 'react-modal';
import { Word } from '../../../types/word.type';
import './modal.scss';
import { ToastType } from '../toast-message/toast-notification.component';
import { setWord } from '../../state/state';

interface Props {
  word: Word,
  title: string,
  showNotificationToast: (word: Word, type: ToastType) => void;
  closeModal: () => void;
  isModalOpen: boolean;
}


function Editmodal(props: Props) {
  const [word, updateWord] = useState(props.word.word);
  const [replacement, setReplacement] = useState(props.word.replacement);
  const appendWord = setWord();

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

  function addWord() {
    if (word !== '') {
      appendWord({ id: 12, word: word, replacement: replacement, hiddenIn: '' });
      props.showNotificationToast({ id: 12, word: word, replacement: replacement, hiddenIn: '' }, 'success');
      props.closeModal();
    }
  }

  function removeWord() {
    if (word !== '') {
      props.showNotificationToast({ id: 12, word: word, replacement: replacement, hiddenIn: '' }, 'danger');
      props.closeModal();
    }
  }

  function wordChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    updateWord(event.target.value);
  }

  function replacementChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setReplacement(event.target.value);
  }

  return (
    <Modal isOpen={props.isModalOpen} onRequestClose={props.closeModal} style={customStyles} contentLabel="Hyde Modal">
      <div className="hyde-modal">
        <div className="hyde-modal__header">
          <h2 className="hyde-modal__header-text">
            {props.title}
          </h2>
          <div className="hyde-modal__header-delete" onClick={removeWord}>
            <ButtonComponent type='icon' Icon='trash' classes='' label='Remove' />
          </div>
        </div>
        <div className="input-with-label">
          <label htmlFor="name">Word</label>
          <input type="text" name='word' placeholder='Enter word to hide.' onChange={wordChangeHandler} value={word} />
        </div>
        <div className="input-with-label">
          <label htmlFor="replacement">Replace with</label>
          <input type="text" name='replacement' placeholder='Enter word to replace with.' onChange={replacementChangeHandler} value={replacement} />
        </div>
        <div className="hyde-modal__buttons">
          <div className="add" onClick={addWord}>
            <ButtonComponent classes='full primary active' type='text' label='Add' />
          </div>
          <div className="close" onClick={props.closeModal}>
            <ButtonComponent classes='secondary full' type='text' label='Close' />
          </div>
        </div>
      </div>
    </Modal>
  )
}

Modal.setAppElement('#root');
export default Editmodal;