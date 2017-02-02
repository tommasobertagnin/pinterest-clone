import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper';
import AddForm from './AddForm';
import CreatePinBtn from './CreatePinBtn';

const Header = (props) => {
      return (
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <span className="navbar-brand">Pinterest Clone</span>
                  </div>

                  <div className="collapse navbar-collapse" id="navbar-collapse-1">
                      <CreatePinBtn user={props.user} />
                      <ul className="nav navbar-nav navbar-right"><li> <AccountsUIWrapper /></li></ul>
                  </div>
              </div>
          </nav>
      );
};
export default Header;