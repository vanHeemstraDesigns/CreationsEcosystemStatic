import React from 'react';
import StylePropable from '../mixins/style-propable';
import Tooltip from '../tooltip';
import DefaultRawTheme from '../styles/raw-themes/light-raw-theme';
import ThemeManager from '../styles/theme-manager';

const TableHeaderColumn = React.createClass({

  propTypes: {
    children: React.PropTypes.node,

    /**
     * The css class name of the root element.
     */
    className: React.PropTypes.string,
    columnNumber: React.PropTypes.number,
    key: React.PropTypes.string,
    onClick: React.PropTypes.func,

    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,
    tooltip: React.PropTypes.string,
    tooltipStyle: React.PropTypes.object,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  mixins: [StylePropable],

  getInitialState() {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
      hovered: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  //to update theme inside state whenever a new theme is passed down
  //from the parent / owner using context
  componentWillReceiveProps(nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});
  },

  getTheme() {
    return this.state.muiTheme.tableHeaderColumn;
  },

  getStyles() {
    let theme = this.getTheme();
    let styles = {
      root: {
        fontWeight: 'normal',
        fontSize: 12,
        paddingLeft: theme.spacing,
        paddingRight: theme.spacing,
        height: theme.height,
        textAlign: 'left',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: this.getTheme().textColor,
        position: 'relative',
      },
      tooltip: {
        boxSizing: 'border-box',
        marginTop: theme.height / 2,
      },
    };

    return styles;
  },

  _onMouseEnter() {
    if (this.props.tooltip !== undefined) this.setState({hovered: true});
  },

  _onMouseLeave() {
    if (this.props.tooltip !== undefined) this.setState({hovered: false});
  },

  _onClick(e) {
    if (this.props.onClick) this.props.onClick(e, this.props.columnNumber);
  },

  render() {
    let styles = this.getStyles();
    let handlers = {
      onMouseEnter: this._onMouseEnter,
      onMouseLeave: this._onMouseLeave,
      onClick: this._onClick,
    };
    let {
      className,
      columnNumber,
      onClick,
      style,
      tooltip,
      tooltipStyle,
      ...other,
    } = this.props;
    if (this.props.tooltip !== undefined) {
      tooltip = (
        <Tooltip
          label={this.props.tooltip}
          show={this.state.hovered}
          style={this.mergeStyles(styles.tooltip, tooltipStyle)} />
      );
    }

    return (
      <th
        key={this.props.key}
        className={className}
        style={this.prepareStyles(styles.root, style)}
        {...handlers}
        {...other}>
        {tooltip}
        {this.props.children}
      </th>
    );
  },

});

export default TableHeaderColumn;
