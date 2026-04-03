import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-background">
        <div className="modal-body">
          <h2>Error Occurred!</h2>
          <p>Something went wrong 😢</p>

          <button onClick={this.props.closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;