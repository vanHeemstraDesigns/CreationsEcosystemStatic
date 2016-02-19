import React from '../local_libraries/react';
import Footer from '../local_components/Footer';
import Navbar from '../local_components/Navbar';

class App extends React.Component {
  render() {
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