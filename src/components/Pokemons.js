import React from "react";
import PropTypes from "prop-types";

export class Pokemons extends React.Component {
  renderTemplate = () => {
    const { pokemon, error, isFetching } = this.props;
    console.log(pokemon);
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (pokemon.length) {
      return pokemon.map(name => <div key={name} className="photo"></div>);
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

Pokemons.propTypes = {
  pokemon: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handlePokemon: PropTypes.func.isRequired
};
