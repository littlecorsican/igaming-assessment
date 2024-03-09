import { chip_type } from '../constant'
import DropDownMenu from './Form/DropDownMenu'

function Chip({ text, type, img, handleClick, selected }) {

    return (
      <>
        {
          type === chip_type.textOnly && <button className={`rounded-[15px] px-2 py-1 border cursor-pointer hover:text-indigo-800 ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
            <img src={img} alt="" />
            {text}
          </button>
        }
        {
          type === chip_type.singleFilter && <button className={`rounded-[15px] px-2 py-1 border cursor-pointer hover:text-indigo-800 ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
            <img src={img} alt="" />
            {text}
            
          </button>
        }
        {
          type === chip_type.multiFilter && <button className={`rounded-[15px] px-2 py-1 border cursor-pointer hover:text-indigo-800 ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
            <img src={img} alt="" />
            {text}
            
          </button>
        }
      </>
    );
  }
  
  export default Chip;
  