import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import TemperatureList from '../routes/list';
import TemperatureSearch from '../routes/search';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<TemperatureSearch path="/" />
					<TemperatureList path="/list" />
				</Router>
			</div>
		);
	}
}
