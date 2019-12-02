import React from "react";
import PropTypes from "prop-types";

export class Pokemon extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props;

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (name) {
      return <p>Покемоны: [{name}]!</p>;
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
  name: PropTypes.array.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handlePokemon: PropTypes.func.isRequired
};
