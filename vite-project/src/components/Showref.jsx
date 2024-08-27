import React from 'react';

function Showref() {
const bbs = React.useRef()
const data = ['javascript', 'java','php']
  return (
    <div>
        {
            data.map((item,i)=> {
                <button ref={el=>bbs.current[i] = el}>{item}</button>
            })
        }
     

    </div>
  )
}

export default Showref