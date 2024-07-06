

const Main = () => {
    const mainStyle = {
        textAlign: 'center',
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        name1 : {
            width: '100%',
            height : 40,
            marginTop : 10,
            fontSize : 25,
            outline : 'none',
        }
    }
    const showAlert = () => {
        let name1 = document.getElementById('name1');
        let s1 = document.getElementById('s1');
        s1.innerHTML = name1.value;
        name1.value = '';
    };
    return (
        <div style={mainStyle}>
             <input type="text" name="" id="name1" style={mainStyle.name1} /><br></br>
             <span id="s1" style={{color:'red',fontWeight:'bold'}}></span>
             <div><button style={{marginTop:15}} onClick={showAlert}>OK button</button></div>
              
        </div>
    );
}

export default Main;
