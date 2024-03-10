import { useState, useEffect, useRef } from 'react'
import './App.css';
import Card from './components/Card'
import Bar from './components/Bar'
import { default_chips } from './constant'
import data from './Assessment_1_2.json'
import appStyles from'./styles/App.module.css'
import { chip_type } from './constant'
import { checkIfOverflow } from './utils/helper'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import chipStyles from'./styles/Chips.module.css'

function App() {
  const barRef = useRef()
  const [chips, setChips] = useState(default_chips)
  const [cards, setCards] = useState([...data.data.oneClickAutomations.items])
  const [overflow, setOverflow] = useState(false)

  const addItemToBar=(item, singleSelect=false)=>{
    //if already pushed, exit
    if (chips.find((value)=>value.text === item.text)) return

    const tempArr = chips.filter((value)=>{
      if (singleSelect) {
        return value.type !== item.type
      }
      return value
    })
    setChips([...tempArr, ...[item]])
  }

  const removeChip=(text)=>{
    setChips([...chips.filter((value)=>value.text !== text)])
  }

  const updateSelected=(text)=>{
    const newChips = chips.map((value)=>{
      if (value.text === text) {
        value.selected = !value.selected
      }
      return value
    })
    setChips(newChips)
  }
  
  const seeAll=()=>{
    setCards([...data.data.oneClickAutomations.items])
  }

  useEffect(()=>{
    toggleDirectionalButton()
    const newCards = data.data.oneClickAutomations.items.filter((card_value) => {
      for(let i=0; i < chips.length; i++) {
        if (chips[i]?.type === chip_type.category && card_value?.categories.find((category)=>category?.slug === chips[i].slug)) {
          return card_value
        } else if (chips[i]?.type === chip_type.site && card_value?.sites.find((site)=>site?.slug === chips[i].slug)) {
          return card_value
        } else if (chips[i]?.type === chip_type.textOnly && chips[i]?.selected && card_value?.slug.indexOf(chips[i]?.slug) > -1) {
          return card_value
        }
      }
    });
    setCards(newCards)
  },[chips])

  const toggleDirectionalButton=()=>{
    setOverflow(checkIfOverflow(barRef?.current?.scrollWidth, window.innerWidth))
  }

  window.addEventListener("resize", toggleDirectionalButton)

  const scrollLeft=()=>{
    barRef.current.scrollLeft -= 100
  }

  const scrollRight=()=>{
    barRef.current.scrollLeft += 100
  }

  return (
    <div className={appStyles.main} >
      <div className={appStyles.top}>
        <div>
          Here are some Automations that pre-defined for product availability monitoring
        </div>
        <div className={appStyles.seeAll} onClick={seeAll}>
          See all
        </div>
      </div>
      <div className={appStyles.bar} id="outer-div">
        {overflow && <div className={`${chipStyles.directionalBtn} ${chipStyles.left}`} onClick={scrollLeft}>
          <IoIosArrowDropleft />
        </div>}
        <Bar 
          chips={chips}
          updateSelected={updateSelected}
          addItemToBar={addItemToBar}
          removeChip={removeChip}
          ref={barRef}
          overflow={overflow}
        />
        {overflow && <div className={`${chipStyles.directionalBtn} ${chipStyles.right}`} onClick={scrollRight}>
          <IoIosArrowDropright />
        </div>}
      </div>
      <div className={appStyles.cards}>
        {
          cards.length > 0 && cards.map((value)=>{
            return <Card 
              key={value.id}
              {...value}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;
