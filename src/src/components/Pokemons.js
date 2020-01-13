import React from "react";
import PropTypes from "prop-types";

export class Pokemons extends React.Component {
  componentDidMount() {
    this.props.handlePokemon();
  }

  renderTemplate = () => {
    const { pokemons, error, isFetching } = this.props;
    console.log(pokemons);

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (pokemons.length) {
      return pokemons.map((
        name
        // [1]
      ) => (
        <div>
          <p>{name.name} </p>
        </div>
      ));
    }
  };
  render() {
    return <div className="ib pokemon">{this.renderTemplate()}</div>;
  }
}
Pokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handlePokemon: PropTypes.func.isRequired
};
