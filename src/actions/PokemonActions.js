export const POKEMON_REQUEST = "POKEMON_REQUEST";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

export function handlePokemon(offset, limit) {
  let a = "offset=" + offset;

  let url = "https://pokeapi.co/api/v2/pokemon?offset";
  let url1 = url.replace("offset", a);

  return function getPokemons(dispatch) {
    dispatch({
      type: POKEMON_REQUEST
    });
    //eslint-disable-next-line no-undef

    fetch(url1)
      .then(res => res.json())
      .then(data => {
        //       data.results.next;
        data.offset = offset;
        console.log(offset);
        dispatch({
          type: POKEMON_SUCCESS,
          payload: data,
          offset
        });
      });
  };
}
