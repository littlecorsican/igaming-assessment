import { useState, useEffect } from 'react'
import chipStyles from'../styles/Chips.module.css'
import { RxCross1 } from "react-icons/rx";

function RemovableChip({ text, removeChip }) {


    return (
        <div className={chipStyles.chips}>
            <button className={`${chipStyles.chipBtn} ${chipStyles.selected}`}>
                {text}
                <div className={chipStyles.icon} onClick={()=>removeChip(text)}>
                    <RxCross1 />
                </div>
            </button>
        </div>
    );
}
  
export default RemovableChip;
  