//import React from 'react';
//import ReactDOM from 'react-dom';
//import StylePropable from '../mixins/style-propable';
//import DefaultRawTheme from '../styles/raw-themes/light-raw-theme';
//import ThemeManager from '../styles/theme-manager';

import React, { Component } from 'react';
import template from './Todo.rt';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
require('./assets/style.scss');

const ENTER_KEY = 13;

const Todo = React.createClass({
  displayName: 'Todo',

  getInitialState() {
    return {edited: '', todos: [], counter: 0};
  },

  // more ...
  render: template
});

export default Todo;