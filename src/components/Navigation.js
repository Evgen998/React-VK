import React from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";

export class Navigation extends React.Component {
  render() {
    const { offset, handlePokemon } = this.props;
    console.log(offset);

    console.log(this.props.offset);

    return <button onClick={() => handlePokemon(+20)}>Дальше </button>;
  }
}

Navigation.propTypes = {
  offset: PropTypes.number
};

export default Navigation;
