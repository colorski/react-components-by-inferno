import { version, Component } from 'inferno';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <div className="App-footer">
        <p>{`by Inferno ${version}`}</p>
        <a href="https://github.com/colorski" target="_blank" rel="nofollow noopener noreferrer">github.com/colorski</a>
      </div>
    )
  }
}

export default Footer;