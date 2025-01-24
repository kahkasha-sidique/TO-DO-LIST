import { useEffect, useState } from "react";


function Crud() {
    const [Data, setData] = useState({ name: '', rollno: '' })
    const [newData, setNewData] = useState([])
    const [buttonType, setButtonType] = useState("submit")
    const[currentIndex,setCurrentIndex]=useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...Data, [name]: value })
        console.log(Data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (buttonType == "update") {
            const updateData=[...newData]
            updateData[currentIndex]=Data
            setNewData(updateData)
            setButtonType("submit")
            setCurrentIndex(null)
            setData({ name: '', rollno: '' })
        }
        else{
           setNewData([...newData, Data])
           setData({ name: '', rollno: '' })
       }
    }
   

    const handleupdate = (row,index) => {
        setData({ name: row.name, rollno: row.rollno })
        setButtonType("update")
        setCurrentIndex(index)
    }

    const handledelete=(index)=>{
        const updaterow=[...newData]
       updaterow.splice(index,1)
        setNewData(updaterow)
        
    }

    useEffect(() => {
        console.log(newData)
    },[newData])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={Data.name} placeholder="name" />
                <input type="number" name="rollno" onChange={handleChange} value={Data.rollno} placeholder="roll no" />
                <button type="submit">{buttonType}</button>
            </form>
            <h1>table</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Roll no</th>
                </tr>
                {newData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.rollno}</td>
                        <td><button onClick={() => handleupdate(row,index)}>update</button></td>
                        <td><button onClick={()=>handledelete(row,index)}>Delete</button></td>
                    </tr>
                ))}
            </table>

        </div>
    );
}
export default Crud;