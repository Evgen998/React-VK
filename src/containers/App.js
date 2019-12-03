import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { Pokemons } from "../components/Pokemons";
import { getPhotos } from "../actions/PageActions";
import { handleLogin } from "../actions/UserActions";
import { handlePokemon } from "../actions/PokemonActions";

class App extends Component {
  render() {
    // вытащили handleLoginAction из this.props
    const {
      user,
      page,
      pokemons,
      getPhotosAction,
      handleLoginAction,
      handlePokemonAction
    } = this.props;
    console.log(pokemons);
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
          pokemon={[pokemons]}
          isFetching={pokemons.isFetching}
          error={pokemons.error}
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
    pokemons: store.pokemons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
    handleLoginAction: () => dispatch(handleLogin()),
    handlePokemonAction: () => dispatch(handlePokemon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
