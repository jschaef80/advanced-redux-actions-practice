import { connect } from 'react-redux';
import CurrentCity from '../components/CurrentCity'

const mapStatetoProps = (state) => {
    return {
        text: state.CurrentCity
    }
}

export default connect(mapStatetoProps, null)(CurrentCity)