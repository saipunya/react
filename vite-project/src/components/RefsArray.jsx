import React from 'react'

function RefsArray() {
    const table = React.useRef([])
    const tr = React.useRef([])
    const data = [
        ['javascript', 10],
        ['react', 20],
        ['node', 30],
        ['express', 40]

    ]
    const onClickButton = (i) => {
        const index = tr.current[i].rowIndex
        table.current.deleteRow(index)
    }
    const onMouseOver = (i) => {
        tr.current[i].style.backgroundColor = 'yellow'
    }
    const onMouseOut = (i) => {
        tr.current[i].style.backgroundColor = 'red'
    }
  return (
    <>
    <table border='1'>
        <thead>
            <tr>
                <th>Course</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody ref={table} >
            {data.map((item, i) => (
                <tr key={i} ref={(el) => tr.current[i] = el} 
                onMouseOver={() => onMouseOver(i)} 
                onMouseOut={() => onMouseOut(i)}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>
                        <button onClick={() => onClickButton(i)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default RefsArray