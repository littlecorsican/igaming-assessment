import { useState, useEffect } from 'react'
import formStyles from'../../styles/Form.module.css'

function DropDownMenu({ list, handleClick }) {

    const [search, setSearch] = useState("");
    const [filteredList, setFilteredList] = useState(list);

    const updateSearch=(e)=>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        setFilteredList(list.filter((value)=>{
            return value.toLowerCase().indexOf(search.toLowerCase()) > -1
        }))
    },[search])
    

  return (
    <>
        <div>
            <input type="text" className={formStyles.input} placeholder="Search" onChange={updateSearch} />
        </div>
        {
            filteredList.length > 0 && filteredList.map((value)=>{
                return <div className={formStyles.menuItem} key={value} onClick={()=>handleClick(value)}>
                    {value}
                </div>
            })
        }
    </>
    );
  }
  
  export default DropDownMenu;
  