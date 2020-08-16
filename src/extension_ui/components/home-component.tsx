import React from 'react'
import SettingsIcon from './../assets/icons/icon-settings-gear.svg';
import { navigateTo } from '../routing-utils/history'
import { PATHS } from '../routing-utils/paths';

export default function HomeComponent() {
  function goToSettings() {
    navigateTo(PATHS.SETTINGS);
  }

  return (
    <div className='home'>
      <div className="header">
        <div onClick={() => goToSettings()}>
          <SettingsIcon />
        </div>
        <span className='logo-title'>Hyde</span>
      </div>
    </div>
  )
}
