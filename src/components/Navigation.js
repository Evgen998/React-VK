import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { handlePokemon } from "../actions/PokemonActions";
export class Navigation extends React.Component {
  functionNavigation = () => {
    const { offset } = this.props;

    console.log(this.props);
    this.props.handlePokemon(offset);
  };

  render() {
    return <button onClick={this.functionNavigation}>Дальше</button>;
  }
}

Navigation.propTypes = {
  offset: PropTypes.string
};

const mapStateToProps = store => {
  return {
    offset: store.offset
  };
};
const mapDispatchToProps = dispatch => {
  // handlePokemonAction: (offset) => dispatch(handlePokemon(offset+10, 30))
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
