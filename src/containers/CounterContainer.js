import { connect } from 'react-redux';
import { increaseCounter } from "../actions";
import { decreaseCounter } from "../actions";
import Counter from "../components/Counter";

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter);
