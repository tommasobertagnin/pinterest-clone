import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper';
import AddForm from './AddForm';

export default class Header extends Component {
  render() {
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
                      <AddPinBtn user={this.props.user} />
                      <ul className="nav navbar-nav navbar-right"><li> <AccountsUIWrapper /></li></ul>
                  </div>
              </div>
          </nav>
      );
  }
}

class AddPinBtn extends Component {
    render(){
            if(this.props.user) {
                return (
                    <ul className="nav navbar-nav">
                        <li className="dropdown" id="add-pin-btn">
                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#add-modal">
                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Create Pin
                            </button>
                        </li>
                    </ul>
                )
            } else {
                return null;
            }
        }
}