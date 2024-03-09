import { useState, useEffect } from 'react'
import chipStyles from'../styles/Chips.module.css'
import { FaBeer } from 'react-icons/fa';

function TextOnlyChip({ text, icon, selected, updateSelected }) {

    // const [selected, setSelected] = useState(false)

    // const handleClick=()=>{
    //     setSelected((selected)=>!selected)
    // }

    // useEffect(()=>{
    //     updateSelected(selected)
    // },[selected])

    const DynamicIcon=()=>{
        return icon
    }

    return (
        <div className={chipStyles.chips}>
            <button className={`${chipStyles.chipBtn} ${selected && chipStyles.selected}`} onClick={()=>updateSelected(text)}>
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
  