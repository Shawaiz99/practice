import { useState } from "react";

function CounterComponent() {

  const [count, setCount] = useState(0);
  

  const handleOnClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center">Counter</h1>
      <div className="fs-2 text-center">
        Current Number of Likes is: {count}
      </div>
      <div className="text-center">
        <button onClick={handleOnClick} className="btn btn-primary btn-sm">
          Like
        </button>
      </div>
    </div>
  );
}

export default CounterComponent;
