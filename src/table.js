import { useState, useEffect } from "react";
import './table.css';

function Table() {
    const [Data, setData] = useState({ name: ''})
    const [newData, setNewData] = useState([])
    const [buttonType, setButtonType] = useState("submit")
    const [currentIndex, setCurrentIndex] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...Data, [name]: value })
        console.log(Data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (buttonType == "update") {
            const updateData = [...newData]
            updateData[currentIndex] = Data
            setNewData(updateData)
            setButtonType("submit")
            setCurrentIndex(null)
            setData({ name: ''})
        }
        else {
            setNewData([...newData, Data])
            setData({ name: ''})
        }
    }


    const handleupdate = (row, index) => {
        setData({ name: row.name })
        setButtonType("update")
        setCurrentIndex(index)
    }

    const handledelete = (index) => {
        const updaterow = [...newData]
        updaterow.splice(index, 1)
        setNewData(updaterow)

    }

    useEffect(() => {
        console.log(newData)
    }, [newData])
    return (
        <div className="main-div">
            <h1 className="text-center">TO DO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Item..." name="name" value={Data.name} onChange={handleChange} />
                <button type="submit"  className="btn btn-dark">ADD</button>
            </form>
            <h1 className="text-info" id="list">list</h1>
            <ul className="unordered-list "  style={{listStyleType:"none"}}>
                {newData.map((row, index) => (
                   <li key={index}>
                        {row.name}
                        <div>
                        <button className="me-1" onClick={() => handleupdate(row, index)}>update</button>
                        <button onClick={() => handledelete(row, index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Table;
