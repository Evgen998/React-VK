import React from "react";
import PropTypes from "prop-types";

export class Pokemon extends React.Component {
  renderTemplate = () => {
    const { error, isFetching, pokemons } = this.props;

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (pokemons) {
      return <p>Покемоны: {pokemons}!</p>;
    } else {
      return (
        <button className="btn" onClick={this.props.handlePokemon}>
          Показать
        </button>
      );
    }
  };

  render() {
    return <div className="ib pokemon">{this.renderTemplate()}</div>;
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handlePokemon: PropTypes.func.isRequired
};
