import React from 'react';
import './FaceRecognition.css';

class FaceRecognition extends React.Component {
  render() {
    const {box} = this.props;
    return (
      <div className='bounding-box'
        style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
      </div>
    );
  }
}

export default FaceRecognition;
