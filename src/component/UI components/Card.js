const Card = (props) => {
  return (
    <div
      className={` rounded-lg overflow-hidden border shadow-lg border-gray-300`}
    >
      {props.children}
    </div>
  );
};

export default Card;
