import DropDownMenu from './Form/DropDownMenu'
import { useState } from 'react'
// import styles from'../styles/Chips.module.css'
import formStyles from'../styles/Form.module.css'
import chipStyles from'../styles/Chips.module.css'

function MultiFilterChip({ text, type, icon, list, addItemToBar }) {

    const [showMenu, setShowMenu] = useState(false)

    const handleClick=()=>{
        setShowMenu((showMenu)=>!showMenu)
    }

    const handlePick=(e)=>{
        setShowMenu(false)
        addItemToBar(e)
    }

    const DynamicIcon=(Icon)=>{
        return icon
    }

    return (
        <div className={chipStyles.chips}>
            <button className={chipStyles.chipBtn} onClick={handleClick}>
                <div className={chipStyles.icon}>
                    <DynamicIcon />
                </div>
                {text}
            </button>
            {showMenu && <menu className={formStyles.menu}>
                <DropDownMenu list={list} handleClick={handlePick} />
            </menu>}
        </div>
    );
}
  
export default MultiFilterChip;
  