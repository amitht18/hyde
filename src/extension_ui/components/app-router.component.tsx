import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from '../routing-utils/history';
import SettingsComponent from './settings-component';
import HomeComponent from './home-component';
import { PATHS } from '../routing-utils/paths';

export default function AppRouter() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact={true} path={'/'} render={() => <Redirect to={PATHS.HOME} />} />
          <Route path={PATHS.HOME} component={HomeComponent} />
          <Route path={PATHS.SETTINGS} component={SettingsComponent} />
          <Route render={() => <Redirect to={PATHS.HOME} />} />
        </Switch>
      </Router>
    </div>
  )
}
