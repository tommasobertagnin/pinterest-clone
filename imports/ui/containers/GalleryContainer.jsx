import React from 'react'
var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 2,
    itemSelector: '.col',
    percentPosition: true,
    columnWidth: '.col'
};

var Gallery = React.createClass({
    render: function () {
        const images = [{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/orange-butterfly.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/butterfly-on-yellow-flower.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/butterfly-on-petal.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/albino-butterfly.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/blue-butterfly.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/orange-butterfly.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/butterfly-on-yellow-flower.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/butterfly-on-petal.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/albino-butterfly.jpg",
            description: "Butterfly"
        },{
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/blue-butterfly.jpg",
            description: "Butterfly"
        }];

        var childElements = images.map(function(element, i){
            return (
                <div className="col col-xs-6 col-sm-4 col-lg-3">
                    <div key={i} className="gallery-item">
                        <div className="gallery-img">
                            <img src={element.src} />
                        </div>
                        <div className="img-caption text-center">
                            <h4>{element.description}</h4>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">Logo</div>
                            <div className="col-xs-6"><div className="stars pull-right"># <i className="fa fa-star" aria-hidden="true"></i></div></div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <Masonry
                className={'gallery-container'}
                elementType={'div'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {childElements}
            </Masonry>
        );
    }
});

module.exports = Gallery;