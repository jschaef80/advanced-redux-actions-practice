import { connect } from "react-redux";
import Users from '../components/Users';

const mapStateToProps = (state) => {
    return {
      users: state.users,
      firstNameFilter: state.searchText,
      sortOn: state.currentUserSort
    };
  }
  
  export default connect(mapStateToProps, null)(Users);