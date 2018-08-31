import { Component } from 'inferno';
import { BrowserRouter } from 'inferno-router';
import Header from './common/Header';
import Border from './common/Border';
import Main from './common/Main';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrap">
          <Header />
          <Border />
          <Main />
          <Border />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
