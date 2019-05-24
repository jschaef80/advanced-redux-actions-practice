import { connect } from 'react-redux';
import {setTemp} from "../actions";
import setTemp from "../components/settemp";

const mapDispatchToProps = (dispatch) => {
  return {
    set: (temp) => dispatch(setTemp(temp))
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);
