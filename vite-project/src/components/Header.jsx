import React from 'react'

export default function Header() {
    const head = <h2>Welcome to React</h2>
    const divStyle = {
        height: '200px',
        backgroundColor: '#5c5c59',
        color : '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
  return (
    <>
    <div style={divStyle}>
        <div>{head}</div>

    </div>
    </>

  )
}
