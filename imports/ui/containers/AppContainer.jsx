import React, { PropTypes, Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AddForm from '../components/AddForm';

export class App extends Component {
    render(){
        return (
            <div id="app">
                <Header user={this.props.user} />
                {this.props.page}
                <AddForm />
                <Footer />
            </div>
        )
    }
}

App.propTypes = {
    user: PropTypes.object
};

export default createContainer(() => {
  // props here will have `page`, passed from the router
  // anything we return from this function will be *added* to it
  return {
      user: Meteor.user()
  };
}, App);
