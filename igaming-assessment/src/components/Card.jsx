
function Card({ title, shortDescription, image_path, slug}) {
  return (
    <div className="rounded-lg border inline-block w-60 m-8 p-4 text-left h-60 text-ellipsis overflow-hidden">
      <div className="flex flex-col">
        <div className="rounded">
            <img src={image_path} alt='' />
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
