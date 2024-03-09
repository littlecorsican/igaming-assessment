import { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Card'
import Bar from './components/Bar'
import { default_chips } from './constant'
import data from './Assessment_1_2.json'
import appStyles from'./styles/App.module.css'

function App() {
  console.log("data", data, data.data)
  const [cards, setCards] = useState([...data.data.oneClickAutomations.items])
  const [chips, setChips] = useState(default_chips)

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

  const filterCards=(filter)=>{
    const newCards = data.data.oneClickAutomations.items.filter((value) => {
      return value.category === filter;
    });
    setCards(newCards);
  }
  

  useEffect(()=>{
    console.log("chips", chips)
    const newCards = data.data.oneClickAutomations.items.filter((value) => {
      return 
    });
    console.log("newCards", newCards)
  },[chips])

  return (
    <div className={appStyles.main}>
      <div className={appStyles.top}>
        <div>
          Here are some Automations that pre-defined for product availability monitoring
        </div>
        <div className='text-indigo-800'>
          See all
        </div>
      </div>
      <div className={appStyles.bar}>
        <Bar 
          chips={chips} 
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
