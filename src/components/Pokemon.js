import React from "react";
import PropTypes from "prop-types";

export class Pokemon extends React.Component {
  renderTemplatePokemon = () => {
    const { name, error, isFetching } = this.props;

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>;
    }

    if (isFetching) {
      return <p>Загружаю...</p>;
    }

    if (name) {
      return <p> {name}</p>;
    } else {
      return (
        <button className="btn" onClick={this.props.handlePokemon}>
          Показать
        </button>
      );
    }
  };
  render() {
    return <div className="ib user">{this.renderTemplatePokemon()}</div>;
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handlePokemon: PropTypes.func.isRequired
};
