import React from 'react';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

class FaceRecognitionList extends React.Component {
  render() {
    return (
      <div className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' src={this.props.imageUrl} alt='' width='500px' height='auto'/>
          {
            this.props.boxArr.map( (box, index) => <FaceRecognition key={index} box={box} /> )
          }
        </div>
      </div>
    )
  }
}

export default FaceRecognitionList;
