const Card = (props) => {
  return (
    <div
      className={`${props.className} rounded-lg overflow-hidden border shadow-sm border-gray-300 bg-white`}
    >
      {props.children}
    </div>
  );
};

export default Card;
