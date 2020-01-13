import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { Pokemons } from "../components/Pokemons";
import { getPhotos } from "../actions/PageActions";
import { handleLogin } from "../actions/UserActions";
import { handlePokemon } from "../actions/PokemonActions";
import { Navigation } from "../components/Navigation";

class App extends Component {
  render() {
    // вытащили handleLoginAction из this.props
    const {
      user,
      page,
      pokemon,
      getPhotosAction,
      handleLoginAction,
      handlePokemonAction
    } = this.props;
    return (
      <div className="app">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
        />
        {/* добавили новые props для User */}
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
        <Pokemons
          pokemons={pokemon.pokemons}
          isFetching={pokemon.isFetching}
          error={pokemon.error}
          handlePokemon={handlePokemonAction}
        />
        <Navigation
          // next={next}
          offset={pokemon.offset}
          handlePokemon={handlePokemonAction}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
    page: store.page,
    pokemon: store.pokemons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
    handleLoginAction: () => dispatch(handleLogin()),
    handlePokemonAction: offset => dispatch(handlePokemon(offset, 20))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
