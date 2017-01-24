import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

// main app container
import AppContainer from '../ui/containers/AppContainer';
// app pages
import HomePage from '../ui/containers/HomePage';

// routes
FlowRouter.route('/', {
  name: 'HomePage',
  action () {
    mount(AppContainer, {
      page: <HomePage />,
    });
  },
});