import React from 'react';

import Heading from './components/Heading'
import Welcome from './components/Welcome'

function App() {
  const teacher = 'david'
  const teacher2 = 'rein'
  const teacher3 = 'jeroen'

  return <div>
    <Heading />

    <Welcome teacher='kelley!' />
    <Welcome teacher={teacher} />
    <Welcome teacher={teacher2} />
    <Welcome teacher={teacher3} />
  </div>
}

export default App;
// module.exports = App