function CounterComponent() {
  const button = 0;

  
  return (
    <div className="container">
      <h1 className="text-center">Counter</h1>
      <div className="fs-2 text-center">Current Number of Likes is: 0</div>
      <div className="text-center">
        <button className="btn btn-primary btn-sm">Like</button>
      </div>
    </div>
  );
}

export default CounterComponent;
