import { useState, useEffect } from 'react'
import chipStyles from'../styles/Chips.module.css'
import { MdOutlineCancel } from "react-icons/md";

function RemovableChip({ text, removeChip }) {


    return (
        <div className={chipStyles.chips}>
            <button className={`flex flex-row rounded-[15px] mx-2 px-2 py-1 my-1 border cursor-pointer hover:text-indigo-800`}>
                {text}
                <div className={chipStyles.icon} onClick={()=>removeChip(text)}>
                    <MdOutlineCancel />
                </div>
            </button>
        </div>
    );
}
  
export default RemovableChip;
  