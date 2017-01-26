import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <span className="navbar-brand">Pinterest Clone</span>
            </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 <div className="nav navbar-nav navbar-right"> <AccountsUIWrapper /></div>
            </div>
        </div>
    </nav>
  );
};

export default Header;