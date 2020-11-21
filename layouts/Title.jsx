import React from 'react';
import titlebg from '../images/image1.png';

const Title = ({children}) => {
  return <div style={{
    backgroundImage: `url(${titlebg})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh'
  }}
  >
    {children}
  </div>;
}

export default Title;