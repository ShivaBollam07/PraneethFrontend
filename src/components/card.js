const Card = ({ title, description }) => (
    <div className="bg-white shadow-md rounded p-4 m-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  export default Card;
  