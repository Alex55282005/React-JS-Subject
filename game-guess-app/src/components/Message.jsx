const Message = ({ text, attempts , arrNumbers}) => {
    return (
      <div className="mt-2 text-lg font-semibold">
        <p>{text}</p>
        <p>Attempts: {attempts}</p>
        <p>Your numbers: {arrNumbers? arrNumbers.map((num)=>{
          return <span>{num}</span>
        }) : ""} </p>
      </div>
    );
  };
  
  export default Message;