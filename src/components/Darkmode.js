import React from 'react'

export default function Darkmode() {
  let mystyle={
    color: 'pink',
    background: 'pink'
  }
  return (
    <div style={mystyle}> 
      <button type='button' class="btn btn-primary"> Enable dark mode</button>
    </div>
  )
}
