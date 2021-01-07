import React from 'react';
import EditButton from './editButton.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.events.map((event, index) => {
          return (
            <div key={index}>
              <div>Date: {event.date}</div>
              <div className='description'>{event.description}</div>
              <EditButton event={event}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Results;