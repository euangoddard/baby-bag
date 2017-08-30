import { h, Component } from 'preact';
import { Bag } from '../../components/bag';
import style from './style';
import {BAGS} from '../../data';

export default class TemperatureList extends Component {

	render() {
		return <div class={style.profile}>{BAGS.map(bag => {
			return <Bag bag={bag}/>;
		})}</div>;
	}
}
