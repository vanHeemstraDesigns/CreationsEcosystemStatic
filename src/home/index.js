import React from '../../libraries/react';
console.log('Home component - called');

class Home extends React.Component {
  render() {
  	console.log('Home component - render called');
    return (
      <div className='alert alert-info'>
        Hello from Home Component
      </div>
    );
  }
}

export default Home;
