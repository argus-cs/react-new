import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/** import pages */
import Home from '../../routes/Home'

/** import actions */
import { gitFetch } from '../../actions/Home/actions'

const mapStateToProps = (state) => ({
  userInfo: state.git
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ gitFetch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)