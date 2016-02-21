import React from 'react';

const HelloWorld = React.createClass({

  propTypes: {
    /**
     * Can be used to render elements inside the HelloWorld.
     */
    children: React.PropTypes.node,

    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,
  },

  mixins: [
    StylePropable,
  ],

  getDefaultProps() {
    return {

    };
  },

  getInitialState() {
    return {

    };
  },

  render() {
    return (
      <div className='alert alert-info'>
        Hello World!
      </div>
    );
  },
});

export default HelloWorld;
