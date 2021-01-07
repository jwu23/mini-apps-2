import React from 'react';
import EditModal from './editModal.jsx';

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.openCloseModal = this.openCloseModal.bind(this);
  }

  openCloseModal() {
    this.setState({
      showModal: !this.state.showModal
    })
    console.log(this.state.showModal)
  }

  render() {
    return (
      <div>
        <EditModal showModal={this.state.showModal} openCloseModal={this.openCloseModal} event={this.props.event}/>
        <button onClick={this.openCloseModal}>Edit</button>
      </div>
    )
  }
}

export default EditButton;