import {
  POKEMON_REQUEST,
  POKEMON_SUCCESS,
  POKEMON_FAIL
} from "../actions/PokemonActions";

const initialState = {
  name: [],
  error: "", // добавили для сохранения текста ошибки
  isFetching: false // добавили для реакции на статус "загружаю" или нет
};

export function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case POKEMON_REQUEST:
      return { ...state, isFetching: true, error: "" };

    case POKEMON_SUCCESS:
      return { ...state, isFetching: false, name: action.payload };

    case POKEMON_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
