import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';

import Pin from './Pin';

const Gallery = (props) => {
  const items = props.items.map((item, i) => (
    <Pin key={i} description={item.description} src={item.src} />
  ));

  return (
    <Masonry
      className={'gallery-container'}
      elementType={'div'}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      {items}
    </Masonry>
  );
};

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};

const masonryOptions = {
  transitionDuration: 2,
  itemSelector: '.col',
  percentPosition: true,
  columnWidth: '.col'
};

export default Gallery;