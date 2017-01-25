import React, { Component } from 'react';
import Gallery from './GalleryContainer';

class HomePage extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
            <Gallery />
          </div>
      </div>
    );
  }
}

export default HomePage;