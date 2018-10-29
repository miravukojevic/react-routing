import React from 'react';

const Modal = (props) => {
    return ( 
        <div className="modal fade" id="myModal" role="dialog" style={{opacity: 1, display: 'block'}}>
            <div className="modal-dialog">
            

            <div className="modal-content">
                <div className="modal-header">
                <h4 className="modal-title">{props.close}</h4>
                <button type="button" className="close" data-dismiss="modal" onClick={props.closeModal}>&times;</button>
                
                </div>
                <div className="modal-body">
                <p>{props.bodyModal}</p>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={props.closeModal} data-dismiss="modal">Close</button>
                </div>
            </div>
            
            </div>
        </div>
     );
}
 
export default Modal;