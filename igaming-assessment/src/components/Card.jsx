import cardStyles from '../styles/Card.module.css' 

function Card({ title, shortDescription, image_path, slug}) {

  return (
    <div className={cardStyles.card}>
      <div className="flex flex-col">
        <div className="rounded">
            <img src={image_path} alt='' className={cardStyles.image} />
        </div>
        <div className="font-bold pb-4">
          {title}
        </div>
        <div className="text-ellipsis overflow-hidden">
          {shortDescription}
        </div>
      </div>
      
    </div>
  );
}

export default Card;
