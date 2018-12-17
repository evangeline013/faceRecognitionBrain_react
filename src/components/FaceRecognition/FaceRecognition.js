import React from 'react';

class FaceRecognition extends React.Component {
  render() {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img src={this.props.imageUrl} alt='' width='500px' height='auto'/>
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
