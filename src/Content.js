import React from 'react';

const Content = ({ color, hexValue, isDark }) => {
  return (

    <div className='cont' style={{
      backgroundColor: color,
      color: isDark ? "#fff" : "#000"
    }}>


      <p>{color ? color : "empty value"}  </p>

      <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

export default Content