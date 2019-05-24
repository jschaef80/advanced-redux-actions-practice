import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter())
  }
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);
