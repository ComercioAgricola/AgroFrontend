import React from 'react'
import { useParams } from 'react-router-dom';

 function confirm() {
    const { token } = useParams();

  return (
    <div>confirm</div>
  )
}

export default confirm