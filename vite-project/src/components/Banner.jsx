
function Banner() {
    function randNumber(min,max) {
        let x = (max - min)+1 ;
        return min +  Math.floor(Math.random() * x);
        
    }

        let result = randNumber(1,3);
        let banner = '';
        let url = '';

    switch (result) {
        case 1 :
            banner = 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
            url = 'http://www.google.co.th';
            break;
        case 2 :
                banner = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                url = 'http://www.chaiyaphum.go.th';
                break;
        case 3 :
                banner = 'https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                url = 'http://www.thairath.co.th';
                break;
    }

    const btnClick = ()=>{
        window.open(url);
    }
    const divStyle = {
        backgroundColor: 'red',
        width : '100%',
        maxWidth : '280px',
        display : 'flex',
        justifyContent : 'center',
        padding : '10px',
        margin : '0',

    }
    
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'25px'}}>
       <div style={divStyle}>
            <img src={banner} alt="" onClick={btnClick} style={{cursor:"pointer"}} width={250} title={result} />
        </div> 
    </div>
  )
}

export default Banner