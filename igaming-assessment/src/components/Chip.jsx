import { chip_type } from '../constant'

function Chip({ text, type, img, handleClick, selected }) {

    return (
      <div className={`rounded-[15px] px-2 py-1 border cursor-pointer ${selected ? "text-indigo-800 border-indigo-800" : "" }`} onClick={handleClick}>
        {
          type === chip_type.textOnly && <>
            <img src={img} alt="" />
            {text}
          </>
        }
        {
          type === chip_type.filter && <>
            <img src={img} alt="" />
            {text}
            
          </>
        }
      </div>
    );
  }
  
  export default Chip;
  