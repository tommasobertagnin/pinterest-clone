import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// MongoDB collection
import { Pins } from '../../api/pins';

import Gallery from '../components/Gallery';

const HomePage = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Gallery items={props.pins}/>
      </div>
    </div>
  );
};

export default createContainer(() => {
  Meteor.subscribe('pins');
  return {
    pins: Pins.find({}, {sort: {createdAt: -1}}).fetch()
  };
}, HomePage);