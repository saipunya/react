

export default function Header(props) {
  const {txt}  = props;
    const head = <h2>Welcome to {txt} </h2>
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
