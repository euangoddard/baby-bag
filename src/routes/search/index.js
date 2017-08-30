import { h, Component } from 'preact';
import style from './style';
import { BAGS } from '../../data';
import { Bag } from '../../components/bag';

export default class TemperatureSearch extends Component {

	state = {
		temperature: null,
	}

	setTemperature = e => {
		const value = parseInt(e.target.value, 10);
		if (!isNaN(value)) {
			this.setState({temperature: value});
		}
	}

	render({}, {temperature}) {
		return (
			<div class={style.search}>
				<h1>Search</h1>
				<input 
					type="number"
					min="1"
					max="50"
					step="1"
					onInput={this.setTemperature} 
					placeholder="Enter temperature"
				/>
				<hr/>
				{this.renderBagForTemperature(temperature)}
			</div>
		);
	}

	renderBagForTemperature (temperature) {
		let bagsInRange = [];
		if (temperature) {
			bagsInRange = BAGS.filter(bag => {
				return bag.min <= temperature && temperature <= bag.max;
			});
		}

		if (bagsInRange.length) {
			return <Bag bag={bagsInRange[0]}/>;
		} else {
			return <em>No bags for that temperature</em>;
		}
	}
}
