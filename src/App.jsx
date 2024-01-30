import React from "react";
import "./App.css";
import {Redirect, Switch , Route} from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import OtpValidation from './Components/OtpValidation';
import Home from './Home';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path = {'/home'} component = {Home}/>
      <Route path = {'/otpValidation'} component = {OtpValidation}/>
      <Route path = {'/'} component = {Login}/>
      <Redirect to = '/'/>
      </Switch>
     </div>
  );
}
