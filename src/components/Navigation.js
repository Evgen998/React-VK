import React from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";

export class Navigation extends React.Component {
  render() {
    const { offset, handlePokemon } = this.props;
    if (offset !== 0) {
      if (offset !== 960) {
        return [
          <button id="1" onClick={() => handlePokemon(offset + 20)}>
            Дальше
          </button>,

          this.props.offset / 20,
          <button id="1" onClick={() => handlePokemon(offset - 20)}>
            Назад
          </button>
        ];
      } else {
        return [
          <button id="1" onClick={() => handlePokemon(offset - 20)}>
            Назад
          </button>,
          this.props.offset / 20
        ];
      }
    } else {
      return [
        <button id="1" onClick={() => handlePokemon(offset + 20)}>
          Дальше
        </button>,
        this.props.offset / 20
      ];
    }
  }
}

Navigation.propTypes = {
  offset: PropTypes.number
};

export default Navigation;
