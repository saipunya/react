/* eslint-disable react/prop-types */


export default function Header(props) {
  const {txt}  = props;
    const head = <h2>Welcome to {txt} </h2>
    const divStyle = {
        height: '200px',
        backgroundColor: '#5c5c59',
        color : '#FFFFFF',
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
    const showAlert = (oper)=>{
      let n1 = parseInt(document.getElementById('n1').value)
      let n2 = parseInt(document.getElementById('n2').value)
      let cal = document.getElementById('cal')
      if(n1=='' || n2==''){
        alert('Please enter numbers')
      }else{
        let r = eval(`${n1} ${oper} ${n2}`);
        cal.innerHTML = `ผลลัพธ์ของ ${n1} ${oper} ${n2} = ${r}`
      }
     
    }
  return (
    <>
    <div style={divStyle}>
        <div><input type="text" name="n1" id="n1" /> + <input type="text" name="n2" id="n2" /></div>
        <div>
          <button onClick={()=>showAlert('+')}>+</button> <button onClick={()=>showAlert('-')}>-</button> <button onClick={()=>showAlert('*')}>*</button> <button onClick={()=>showAlert('/')}>/</button>
        </div>
        <div>{head}</div>
        <div><button onClick={showAlert}>ทดสอบ</button></div>
        <p id="cal"></p>
    </div>
    </>

  )
}
