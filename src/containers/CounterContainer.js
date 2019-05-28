import { connect } from 'react-redux';
import Counter from "../components/Counter";

const mapStateToProps = (state) => {
  return {
    counter: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
