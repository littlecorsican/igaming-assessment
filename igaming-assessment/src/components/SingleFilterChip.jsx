import DropDownMenu from './Form/DropDownMenu'
import { useState, useEffect } from 'react'
// import styles from'../styles/Chips.module.css'
import formStyles from'../styles/Form.module.css'
import chipStyles from'../styles/Chips.module.css'

function SingleFilterChip({ text, type, img, list, addItemToBar }) {

    const [showMenu, setShowMenu] = useState(false)
    const [selected, setSelected] = useState(false)

    const handleClick=()=>{
        setShowMenu((showMenu)=>!showMenu)
    }

    const handlePick=(e)=>{
        setShowMenu(false)
        console.log(e)
        addItemToBar(e, true)
    }
    //className={`${styles.description} ${styles.yellow}`}
    return (
        <div className={chipStyles.chips}>
            <button className={`flex flex-row rounded-[15px] mx-2 px-2 my-1 py-1 border cursor-pointer hover:text-indigo-800 ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
                {img && <img src={img} alt="" className={chipStyles.icon} />}
                {text}
            </button>
            {showMenu && <menu className={formStyles.menu}>
                <DropDownMenu list={list} handleClick={handlePick} />
            </menu>}
        </div>
    );
}
  
export default SingleFilterChip;
  