import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class SignOut extends React.Component {
	componentDidMount = () => {
		this.props.signout()
	}

	render() {
		return <div>Sorry to see you go...</div>
	}
}

export default connect(
	null,
	actions
)(SignOut)
