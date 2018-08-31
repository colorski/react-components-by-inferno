import { Component } from 'inferno';
import { Link } from 'inferno-router';
import Logo from './Logo';
import './Header.css'

export default class Header extends Component {
	render (){
		return (
			<header className="App-header">
				<Link to='/' className="link">
					<Logo />
					<h1 className="App-title">Welcome</h1>
				</Link>
			</header>
		)
	}
}
