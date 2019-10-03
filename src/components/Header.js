import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.css'

class Header extends React.Component {
	renderLinks = () => {
		return this.props.authenticated ? (
			<>
				<Link to='/signout'>Sign Out</Link>
				<Link to='/feature'>Feature</Link>
			</>
		) : (
			<>
				<Link to='/signup'>Sign Up</Link>
				<Link to='/signin'>Sign In</Link>
			</>
		)
	}

	render() {
		return (
			<div className='header'>
				<Link to='/'>Redux Auth</Link>
				{this.renderLinks()}
			</div>
		)
	}
}

const mapStateToProps = ({ auth }) => {
	return { authenticated: auth.authenticated }
}

export default connect(mapStateToProps)(Header)
