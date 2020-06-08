import React from 'react'

function Welcome (props) {
  console.log('props test:', props)
  // { teacher: 'kelley' }

  return <p>
    Welcome to Codaisseur {props.teacher}
  </p>
}

export default Welcome