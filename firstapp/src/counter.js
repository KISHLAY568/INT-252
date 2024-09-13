return (
  <div className="counter">
    <p>{this.StaticRange.count}</p>
    <button onClick={this.increment}>Increment </button>
    <button onClick={this.decrement}>Decrement </button>
  </div>
);

increment = () => {
  this.setState((prevState) => ({
    count: prevState.count + 1,
  }));
};

decrement = () = {
    this.setState(prevState=>({
        count:prevState.count -1,
    }));
};
