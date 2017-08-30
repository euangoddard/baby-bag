import { h, Component } from 'preact';
import style from './style';


export class Bag extends Component {
  render({bag}) {
    return <div class={bag.css}>
      <p>Temp: {this.renderTemperatureRange(bag)}</p>
      <p>Season: {bag.season}</p>
      <p>Bag: {bag.bag}</p>
      <p>Clothes: {bag.clothes}</p>
    </div>;
  }

  renderTemperatureRange({min, max}) {
    if (isFinite(max)) {
      return <span>{min}-{max}&deg;C</span>;
    } else {
      return <span>{min}&deg;C+</span>;
    }
  }
}