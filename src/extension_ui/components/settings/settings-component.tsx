import React from 'react';
import BackIcon from './../../assets/icons/icons-settings-back.svg';
import SettingsBackground from './../../assets/images/settings-background.svg';
import { navigateTo } from '../../routing-utils/history';
import { PATHS } from '../../routing-utils/paths';
import ButtonComponent from '../button/button';
import './settings.scss';

export default function SettingsComponent() {
  function goToHome() {
    navigateTo(PATHS.HOME);
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
        <ButtonComponent Icon='trash' type='icon' classes='delete primary' label='Delete all' />
        <ButtonComponent Icon='smiley' type='icon' classes='primary active' label='Contact Us' />
      </div>
    </div>
  )
}
