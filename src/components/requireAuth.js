import React from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
	class ComposedComponent extends React.Component {
		componentDidMount = () => {
			this.auth()
		}

		componentDidUpdate = () => {
			this.auth()
		}

		auth = () => {
			return !this.props.auth ? this.props.history.push('/') : null
		}

		render = () => {
			return <ChildComponent {...this.props} />
		}
	}

	const mapStateToProps = ({ auth }) => {
		return { auth: auth.authenticated }
	}
	return connect(mapStateToProps)(ComposedComponent)
}
