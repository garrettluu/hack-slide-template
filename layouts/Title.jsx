import React from 'react';
import titlebg from '../images/image1.png';

const Title = ({children}) => {
  return <div style={{
    backgroundImage: `url(${titlebg})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '10%',
    color: 'white'
  }}
  >
    {children}
  </div>;
}

export default Title;