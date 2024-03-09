import { useState, useEffect } from 'react'
import Chip from './Chip'
import TextOnlyChip from './TextOnlyChip'
import SingleFilterChip from './SingleFilterChip'
import MultiFilterChip from './MultiFilterChip'
import { chip_type, filterBySite, filterByCategory } from '../constant'
import styles from '../styles/Bar.module.css'

function Bar(props) {

  const [selectedChips, setSelectedChips] = useState(props.chips)
  const [chips, setChips] = useState(props.chips)
  // console.log("selectedChips", selectedChips) 

  // const handleClick=(selected)=>{
  //   const tempArr = selectedChips
  //   const tempSelected = tempArr.find((value)=>selected.text === value.text).selected
  //   tempArr.find((value)=>selected.text === value.text).selected = !tempSelected
  //   console.log(tempArr)
  //   setSelectedChips([...tempArr]);
  // }

  const addItemToBar=(text)=>{
    const tempVar = [{
      text: text,
      type: "text-only"
    }]
    setChips((chips)=>[...chips, ...tempVar])
  }

  return (
    <div className="flex flex-row py-4 min-w-[400px]">
      {
        chips.length > 0 && chips.map((value)=>{
          if (value.type === chip_type.textOnly) {
            return <TextOnlyChip
              key={value.text}
              {...value}
              //selected={selectedChips.find((value2)=>value.text === value2.text).selected}
            />
          } else if (value.type === chip_type.singleFilter) {
            return <SingleFilterChip
              key={value.text}
              {...value}
              addItemToBar={addItemToBar}
            />
          } else if (value.type === chip_type.multiFilter) {
            return <MultiFilterChip
              key={value.text}
              {...value}
            />
          }

        })
      }
    </div>
    );
  }
  
  export default Bar;
  