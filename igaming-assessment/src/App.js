import { useState, useEffect } from 'react'
import './App.css';
import Card from './components/Card'
import Bar from './components/Bar'
import { chips } from './constant'
import data from './Assessment_1_2.json'

function App() {
  console.log("data", data, data.data)
  const [cards, setCards] = useState([...data.data.oneClickAutomations.items])

  const filterCards=(filter)=>{
    const newCards = data.data.oneClickAutomations.items.filter((value) => {
      return value.category === filter;
    });
    setCards(newCards);
  }
  

  useEffect(()=>{
    console.log("cards", cards)
  },[cards])

  return (
    <div className="App">
      <div className='flex justify-between'>
        <div className=''>
          Here are some Automations that pre-defined for product availability monitoring
        </div>
        <div className='text-indigo-800'>
          See all
        </div>
      </div>
      <div className="w-full">
        <Bar chips={chips} />
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
