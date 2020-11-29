import React, { useState, ChangeEvent, useEffect } from 'react'
import SettingsIcon from './../../assets/icons/icon-settings-gear.svg';
import HomeEmptyScreen from './../../assets/images/home-background.svg';
import { navigateTo } from '../../routing-utils/history';
import { PATHS } from '../../routing-utils/paths';
import './home.scss';
import ButtonComponent from '../button/button';
import Editmodal from '../modal/modal.component';
import { intialWord, Word } from '../../../types/word.type';
import ToastNotificationComponent, { ToastType } from '../toast-message/toast-notification.component';
import ListWordsComponent from './list-ui/list-ui.component';
import { useWord, FilterStateProvider, useFilterStateContext } from '../../state/state';

function HomeComponent() {
  const [toastVisibility, setToastVisibility] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchText, updateSearchText] = useState('');
  const wordsList = useWord();
  const { updateSearchString } = useFilterStateContext();

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function searchChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    updateSearchText(event.target.value);
  }

  useEffect(() => {
    const timing = setTimeout(() => {
      updateSearchString(searchText)
      clearTimeout(timing);
    }, 200)
    return () => {
      clearTimeout(timing);
    }
  }, [searchText])

  function showNotificationToast(word: Word, type: ToastType) {
    setToastVisibility(true);
    setToastType(type);
    type === 'success' ? setToastMessage(`'${word.word}' will be hidden as '${word.replacement}'`) :
      setToastMessage(`Removed word '${word.word}' from Hyde`);

    setTimeout(() => {
      setToastVisibility(false);
      setToastMessage('');
    }, 2000);
  }


  function goToSettings() {
    navigateTo(PATHS.SETTINGS);
  }

  return (
    <div className='home'>
        <div className="header">
          <div className="header__left" onClick={() => goToSettings()}>
            <SettingsIcon />
            <span className='logo-title'>Hyde</span>
          </div>
          <div className="add-button" onClick={openModal}>
            <ButtonComponent Icon={'add'} type={'icon'} label='Add' classes='primary active' />
          </div>
          <Editmodal isModalOpen={modalOpen} closeModal={closeModal} showNotificationToast={showNotificationToast} word={intialWord} title='Add to Hyde' />
        </div>

        <div className="home__search">
          <input type="text" placeholder='Search for hidden words' onChange={searchChangeHandler} value={searchText} />
        </div>

        <div className="list-area">
          {wordsList.length ? <ListWordsComponent /> : <HomeEmptyScreen />}
        </div>

        <ToastNotificationComponent visible={toastVisibility} type={toastType as ToastType} message={toastMessage} />
    </div>
  )
}

export default HomeComponent;