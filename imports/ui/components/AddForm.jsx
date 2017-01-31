import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Pins } from '../../api/pins';

export default class AddForm extends Component {
    handleSubmit(event) {
        event.preventDefault();
        let image = ReactDOM.findDOMNode(this.refs['pin-image-url']).value;
        let description = ReactDOM.findDOMNode(this.refs['pin-description']).value;
        let userId = Meteor.userId();
        let doc = {
            userId: userId,
            src: image,
            description: description
        };
        Meteor.call('createPin', doc);
        $("#add-modal").modal('hide');
    }
    render(){
        return (
        <div className="modal fade" id="add-modal" tabIndex="-1" role="dialog" aria-labelledby="addPinModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="addPinModal">Create a pin</h4>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="pin-image-url">Image url</label>
                            <input type="text" className="form-control" id="pin-image-url" ref="pin-image-url" placeholder="Image URL" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pin-description">Description</label>
                            <input type="text" className="form-control" id="pin-description" ref="pin-description" placeholder="Description" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-default">Create pin</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        );
    }
};