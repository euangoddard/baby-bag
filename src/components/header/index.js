import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Baby sleeping bag</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Search</Link>
					<Link activeClassName={style.active} href="/list">List</Link>
				</nav>
			</header>
		);
	}
}
