import React, { useState } from 'react';
import BackIcon from './../../assets/icons/icons-settings-back.svg';
import SettingsBackground from './../../assets/images/settings-background.svg';
import { navigateTo } from '../../routing-utils/history';
import { PATHS } from '../../routing-utils/paths';
import ButtonComponent from '../button/button';
import './settings.scss';
import DeleteAllModal from '../modal/delete-all-modal.component';
import ToastNotificationComponent, { ToastType } from '../toast-message/toast-notification.component';

export default function SettingsComponent() {
  const [toastVisibility, setToastVisibility] = useState(false);
  const toastType: ToastType = 'danger';
  const toastMessage = 'Removed all Words hidden in Hyde';
  const [modalOpen, setModalOpen] = useState(false);
  
  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function showNotificationToast() {
    setToastVisibility(true);

    setTimeout(() => {
      setToastVisibility(false);
    }, 2000);
  }

  function goToHome() {
    navigateTo(PATHS.HOME);
  }

  function onDeleteAll() {
    openModal();
  }

  return (
    <div className='settings'>
      <div className="settings__header">
        <div className="settings__header-left">
          <div className="settings__header-back" onClick={() => goToHome()}>
            <BackIcon />
          </div>
          <span>Settings</span>
        </div>
      </div>
      <div className="settings__body">
        <div className="settings__body-background">
          <SettingsBackground />
        </div>
        <div className="settings__body-text">
          <div className="settings__body-text__cheer">Wohoo</div>
          <div className="settings__body-text__normal">Hyde is hiding</div>
          <div className="settings__body-text__count">000</div>
          <div className="settings__body-text__normal">words, that you dont like</div>
        </div>
      </div>
      <div className="settings__footer">
        <div className="delete" onClick={onDeleteAll}>
          <ButtonComponent Icon='trash' type='icon' classes='delete primary' label='Delete all' />
        </div>
        <div className="contact">
          <ButtonComponent Icon='smiley' type='icon' classes='primary active' label='Contact us' />
        </div>
      </div>
      <DeleteAllModal  isModalOpen={modalOpen} closeModal={closeModal} showNotificationToast={showNotificationToast} />
      <ToastNotificationComponent visible={toastVisibility} type={toastType as ToastType} message={toastMessage} />
    </div>
  )
}
