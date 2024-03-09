import { useState, useEffect } from 'react'
import chipStyles from'../styles/Chips.module.css'
import { FaBeer } from 'react-icons/fa';

function TextOnlyChip({ text, icon }) {

    const [selected, setSelected] = useState(false)

    const handleClick=()=>{
        setSelected((selected)=>!selected)
    }

    const DynamicIcon=(Icon)=>{
        return icon
    }

    const Icon = icon;

    return (
        <div className={chipStyles.chips}>
            <button className={`flex flex-row rounded-[15px] mx-2 px-2 py-1 my-1 border cursor-pointer hover:text-indigo-800 ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
                {/* {img && <img src={img} alt="" className={chipStyles.icon} />} */}
                <div className={chipStyles.icon}>
                    <DynamicIcon />
                </div>
                {text}
            </button>
        </div>
    );
}
  
export default TextOnlyChip;
  