import { useState, useEffect } from 'react'
import chipStyles from'../styles/Chips.module.css'

function RemovableChip({ text }) {

    const [selected, setSelected] = useState(false)

    const handleClick=()=>{
        setSelected((selected)=>!selected)
    }

    return (
        <div className={chipStyles.chips}>
            <button className={`flex flex-row rounded-[15px] mx-2 px-2 py-1 my-1 border cursor-pointer hover:text-indigo-800 ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
                {text}
                <img src="./images/cancel.png" alt="" className={chipStyles.icon} />
            </button>
        </div>
    );
}
  
export default RemovableChip;
  