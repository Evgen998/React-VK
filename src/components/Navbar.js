import React from "react";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
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
      return pokemons.map(name => (
        <div>
          <p>{name.name} </p>
        </div>
      ));
    } else {
      return (
        <button className="btn" onClick={this.props.handleNavbar}>
          Показать
        </button>
      );
    }
  };

  render() {
    return <div className="ib pokemon">{this.renderTemplate()}</div>;
  }
}

Navbar.propTypes = {
  pokemons: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleNavbar: PropTypes.func.isRequired
};
