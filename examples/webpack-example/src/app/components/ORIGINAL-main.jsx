/** In this file, we create a React component which incorporates our components */

import React from 'react'; // TRY IF IT WORKS WITHOUT IMPORTING REACT AT THIS STAGE
//import React from './../../../../../node_modules/react/lib/React'; // Use the react node_module from the root folder

import RaisedButton from 'material-ui/lib/raised-button'; // Material-ui's library of react components
//import RaisedButton from './../../../../../lib/raised-button'; // Our own library of react components

import Dialog from 'material-ui/lib/dialog';
//import Dialog from './../../../../../lib/dialog'; // Our own library of react components

import ThemeManager from 'material-ui/lib/styles/theme-manager';
//import ThemeManager from './../../../../../lib/styles/theme-manager'; // Our own library of react components

import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
//import LightRawTheme from './../../../../../lib/styles/raw-themes/light-raw-theme';

import Colors from 'material-ui/lib/styles/colors';
//import Colors from './../../../../../lib/styles/colors'; // Our own library of react components

import FlatButton from 'material-ui/lib/flat-button';
//import FlatButton from './../../../../../lib/flat-button'; // Our own library of react components

const containerStyle = {
  textAlign: 'center',
  paddingTop: 200,
};

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      open: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },

  render() {
    const standardActions = (
      <FlatButton
        label="Okay"
        secondary={true}
        onTouchTap={this._handleRequestClose}
      />
    );

    return (
      <div style={containerStyle}>
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this._handleRequestClose}
        >
          1-2-3-4-5
        </Dialog>
        <h1>Components</h1>
        <h2>webpack example project</h2>
        <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
      </div>
    );
  },
});

export default Main;
