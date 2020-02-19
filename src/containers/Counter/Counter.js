import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSub} />
        <hr />
        <button onClick={this.props.onSave}>Store result</button>
        <ul>
          {this.props.stored.map(result => (
            <li onClick={() => this.props.onDelete(result.id)} key={result.id}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    stored: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: actions.INC }),
    onDecrement: () => dispatch({ type: actions.DEC }),
    onAdd: () => dispatch({ type: actions.ADD, value: 5 }),
    onSub: () => dispatch({ type: actions.SUB, value: 5 }),
    onSave: () => dispatch({ type: actions.STO }),
    onDelete: id => dispatch({ type: actions.DEL, id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
