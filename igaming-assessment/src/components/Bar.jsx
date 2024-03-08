import { useState, useEffect } from 'react'
import Chip from './Chip'

function Bar({ chips }) {

  const [selectedChips, setSelectedChips] = useState(chips)
  console.log("selectedChips", selectedChips) 

  const handleClick=(selected)=>{
    const tempArr = selectedChips
    const tempSelected = tempArr.find((value)=>selected.text === value.text).selected
    tempArr.find((value)=>selected.text === value.text).selected = !tempSelected
    console.log(tempArr)
    setSelectedChips([...tempArr]);
  }

  return (
    <div className="flex flex-row py-4">
      {
        chips.length > 0 && chips.map((value)=>{
          return <Chip
            {...value}
            handleClick={()=>handleClick(value)}
            selected={selectedChips.find((value2)=>value.text === value2.text).selected}
          />
        })
      }
    </div>
    );
  }
  
  export default Bar;
  