import { Component } from "react";
export default class CounterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counter: 0
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("CounterC : getDerivedStateFromProps");
    if (<props className="counter"></props> !== state.counter) 
      return { count: <props className="counter"></props> };
  }

  render() {
    console.log("CounterC : render");
  return(
     <>{ this.state.loading ? <div> Loading...</div> :
      <div>
      <p>Count:{this.state.count}</p>
      </div>
     }
  </>);
  }
}