import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Welcome from './components/Welcome'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import Feature from './components/Feature'

ReactDOM.render(
	<Provider
		store={createStore(
			reducers,
			{
				auth: { authenticated: localStorage.getItem('token') }
			},
			applyMiddleware(thunk)
		)}
	>
		<BrowserRouter>
			<App>
				<Route path='/' exact component={Welcome} />
				<Route path='/signup' exact component={SignUp} />
				<Route path='/signin' exact component={SignIn} />
				<Route path='/signout' exact component={SignOut} />
				<Route path='/feature' exact component={Feature} />
			</App>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
)
