import React from 'react'
import SettingsIcon from './../../assets/icons/icon-settings-gear.svg';
import HomeEmptyScreen from './../../assets/images/home-background.svg';
import { navigateTo } from '../../routing-utils/history';
import { PATHS } from '../../routing-utils/paths';
import './home.scss';
import ButtonComponent from '../button/button';

export default function HomeComponent() {
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

        <ButtonComponent Icon={'add'} type={'icon'} label='Add' classes='primary' />
      </div>

      <div className="home__search">
        <input type="text" placeholder='Search for hidden words' />
      </div>

      <div className="list-area">
        {false ? <div className="list"></div> : <HomeEmptyScreen />}
      </div>
    </div>
  )
}
