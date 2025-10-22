//props are read only 
//shared from parent to child component.
//they actually make you component reusable.

import React from 'react'

function propertyComp({name,age,country}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  )
}

export default propertyComp;
