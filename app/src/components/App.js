import React from 'react'
import {Switch, Route} from 'react-router'

import NavPanel from './side-panel'
import NavBar from './nav-bar'

import Home from '../pages/Home'
import Robots from '../pages/Robots'
import AppSettingsPage from '../pages/AppSettings'
import Upload from '../pages/Upload'
import SetupInstruments from '../pages/SetupInstruments'
import SetupDeck from '../pages/SetupDeck'
import Run from '../pages/Run'

import './App.global.css'
import styles from './App.css'

export default function App () {
  return (
    <div className={styles.wrapper} onDragOver={stopEvent} onDrop={stopEvent}>
      <NavBar />
      <NavPanel />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Home} />
        <Route exact path='/menu/app' component={AppSettingsPage} />
        <Route path='/robots/:name?' component={Robots} />
        <Route path='/upload' component={Upload} />
        <Route path='/setup-instruments/:mount' component={SetupInstruments} />
        <Route path='/setup-deck/:slot' component={SetupDeck} />
        <Route path='/run' component={Run} />
      </Switch>
    </div>
  )
}

function stopEvent (event) {
  event.preventDefault()
}
