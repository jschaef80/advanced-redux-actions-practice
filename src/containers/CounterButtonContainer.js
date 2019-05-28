import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import Counterbutton from '../components/CounterButton';

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter())
  }
}

export default connect(null, mapDispatchToProps)(Counterbutton);
