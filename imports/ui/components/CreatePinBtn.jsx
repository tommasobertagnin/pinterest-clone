import React from 'react';

const CreatePinBtn = (props) => {
    if(props.user) {
        return (
            <ul className="nav navbar-nav">
                <li className="dropdown" id="create-pin-btn">
                    <button type="button" className="btn btn-default" data-toggle="modal" data-target="#add-modal">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Create Pin
                    </button>
                </li>
            </ul>
        )
    }
    return null;
};
export default CreatePinBtn;