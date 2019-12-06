import {
  NAVBAR_REQUEST,
  NAVBAR_SUCCESS,
  NAVBAR_FAIL
} from "../actions/NavbarActions";

const initialState = {
  pokemons: [],
  error: "", // добавили для сохранения текста ошибки
  isFetching: false // добавили для реакции на статус "загружаю" или нет
};

export function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case NAVBAR_REQUEST:
      return { ...state, isFetching: true, error: "" };

    case NAVBAR_SUCCESS:
      return { ...state, isFetching: false, pokemons: action.payload };

    case NAVBAR_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
