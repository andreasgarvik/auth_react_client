import React from 'react'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class SignIn extends React.Component {
	onSubmit = formProps => {
		this.props.signin(formProps, () => {
			this.props.history.push('/feature')
		})
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name='email'
						type='text'
						component='input'
						autoComplete='none'
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name='password'
						type='password'
						component='input'
						autoComplete='none'
					/>
				</fieldset>
				<div>{this.props.errorMessage}</div>
				<button>Sign In</button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return { errorMessage: state.auth.errorMessage }
}

export default compose(
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ form: 'signin' })
)(SignIn)
