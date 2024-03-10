import Card from './Card'
import appStyles from'../styles/App.module.css'

function Cards({ data }) {
    
  return (
    <div className={appStyles.cards}>
        {
        data.length > 0 && data.map((value)=>{
            return <Card 
            key={value.id}
            {...value}
            />
        })
        }
    </div>
    );
}
  
export default Cards;
  