import { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Card'
import Bar from './components/Bar'
import { default_chips } from './constant'
import data from './Assessment_1_2.json'
import appStyles from'./styles/App.module.css'
import { chip_type } from './constant'

function App() {
  const [chips, setChips] = useState(default_chips)
  const [cards, setCards] = useState([...data.data.oneClickAutomations.items])

  const addItemToBar=(item, singleSelect=false)=>{
    //if already pushed, exit
    if (chips.find((value)=>value.text == item.text)) return

    const tempArr = chips.filter((value)=>{
      if (singleSelect) {
        return value.type != item.type
      }
      return value
    })
    setChips([...tempArr, ...[item]])
  }

  const removeChip=(text)=>{
    setChips([...chips.filter((value)=>value.text != text)])
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

  return (
    <div className={appStyles.main}>
      <div className={appStyles.top}>
        <div>
          Here are some Automations that pre-defined for product availability monitoring
        </div>
        <div className={appStyles.seeAll} onClick={seeAll}>
          See all
        </div>
      </div>
      <div className={appStyles.bar}>
        <Bar 
          chips={chips}
          updateSelected={updateSelected}
          addItemToBar={addItemToBar}
          removeChip={removeChip}
        />
      </div>
      <div className="w-full text-left">
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
