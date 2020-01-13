import React from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";

export class Navigation extends React.Component {
  render() {
    const { offset, handlePokemon } = this.props;
    return <button onClick={() => handlePokemon(offset + 10)}>Дальше </button>;
  }
}

Navigation.propTypes = {
  offset: PropTypes.number
};

export default Navigation;
