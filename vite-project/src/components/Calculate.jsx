import {useRef} from 'react'

function Calculate() {
    const num1 = useRef()
    const num2 = useRef()
    const result = useRef()
    const operator = useRef()
    const buttonConculate = (ev)=>{
        let op = ev.target.innerText
        let n1 = parseInt(num1.current.innerText)
        let n2 = parseInt(num2.current.innerText)
        let r = eval(`${n1} ${op} ${n2}`)
        result.current.innerText = r
        operator.current.innerText = op
    }
    const divStyle = {
        textAlign : 'center',
        marginTop : 20,
        fontSize : 18,

    }
  return (
    <div style={divStyle}>
        <span ref={num1}>15</span>
        <span ref={operator}>?</span>
        <span ref={num2}>4</span>
        <span>=</span>
        <span ref={result}>?</span><br/>
        <button onClick={buttonConculate}>+</button>
        <button onClick={buttonConculate}>-</button>
        <button onClick={buttonConculate}>*</button>
        <button onClick={buttonConculate}>/</button>
    </div>
  )
}

export default Calculate