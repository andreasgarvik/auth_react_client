import { AUTH_USER, AUTH_ERROR } from './types'
import axios from 'axios'

export const signup = (form, done) => async dispatch => {
	try {
		const res = await axios.post('http://localhost:5000/auth/signup', form)
		dispatch({ type: AUTH_USER, payload: res.data.token })
		localStorage.setItem('token', res.data.token)
		done()
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Email is in use' })
	}
}

export const signin = (form, done) => async dispatch => {
	try {
		const res = await axios.post('http://localhost:5000/auth/signin', form)
		dispatch({ type: AUTH_USER, payload: res.data.token })
		localStorage.setItem('token', res.data.token)
		done()
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' })
	}
}

export const signout = () => {
	localStorage.removeItem('token')
	return {
		type: AUTH_USER,
		payload: ''
	}
}
