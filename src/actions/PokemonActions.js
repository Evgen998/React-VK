export const POKEMON_REQUEST = "POKEMON_REQUEST";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

export function handlePokemon(pokemon) {
  return function(dispatch) {
    dispatch({
      type: POKEMON_REQUEST
    });
    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        let username = r.session.user.first_name;

        dispatch({
          type: POKEMON_SUCCESS,
          payload: username
        });
      } else {
        dispatch({
          type: POKEMON_FAIL,
          error: true,
          payload: new Error("Ошибка")
        });
      }
    }, 4);
  };
}
