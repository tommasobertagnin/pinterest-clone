import React, { PropTypes } from 'react';

const Pin = (props) => {
  return (
    <div className="col col-xs-6 col-sm-4 col-lg-3">
      <div className="gallery-item">
        <div className="gallery-img">
          <img src={props.src} />
        </div>
        <div className="img-caption text-center">
          <h4>{props.description}</h4>
        </div>
        <div className="row">
          <div className="col-xs-6">Logo</div>
          <div className="col-xs-6"><div className="stars pull-right"># <i className="fa fa-star" aria-hidden="true"></i></div></div>
        </div>
      </div>
    </div>
  );
};

Pin.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Pin;