import React from '../local_libraries/react';
import Footer from '../local_components/Footer';
import Navbar from '../local_components/Navbar';
console.log('App component - called');

class App extends React.Component {
  render() {
  	console.log('App component - render called');
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;