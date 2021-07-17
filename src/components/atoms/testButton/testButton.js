import React from 'react';
import testImg from '../../../assets/images/testImg.png';

const testButton = () => {
  return (
    <button>
      Test Button
      <img src={testImg} alt="testImg" width="100" />
    </button>
  )
}

export default testButton;
