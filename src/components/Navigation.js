import React from "react";
import PropTypes from "prop-types";
//import { connect } from "react-redux";

export class Navigation extends React.Component {
  render() {
    const { offset, handlePokemon, b, limit } = this.props;

    console.log(b);

    if (offset !== 0) {
      if (offset !== b) {
        return [
          <button id="1" onClick={() => handlePokemon(offset + limit)}>
            Дальше
          </button>,

          this.props.offset / limit,
          <button id="1" onClick={() => handlePokemon(offset - limit)}>
            Назад
          </button>
        ];
      } else {
        return [
          <button id="1" onClick={() => handlePokemon(offset - limit)}>
            Назад
          </button>,
          this.props.offset / limit
        ];
      }
    } else {
      return [
        <button id="1" onClick={() => handlePokemon(offset + limit)}>
          Дальше
        </button>,
        this.props.offset / limit
      ];
    }
  }
}

Navigation.propTypes = {
  offset: PropTypes.number
};

export default Navigation;
