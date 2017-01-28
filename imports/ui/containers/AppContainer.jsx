import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = (props) => (
  <div id="app">
    <Header />
    {props.page}
    <Footer />
  </div>
);

export default createContainer((props) => {
  // props here will have `page`, passed from the router
  // anything we return from this function will be *added* to it
  return {
    // user: Meteor,
  };
}, App);
