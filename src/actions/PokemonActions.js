export const POKEMON_REQUEST = "POKEMON_REQUEST";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

export function handlePokemon(pokemons) {
  let url = "https://pokeapi.co/api/v2/pokemon";

  return function(dispatch) {
    dispatch({
      type: POKEMON_REQUEST
    });
    //eslint-disable-next-line no-undef

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // data.results;

        dispatch({
          type: POKEMON_SUCCESS,
          payload: data.results
        });
      });
  };
}
