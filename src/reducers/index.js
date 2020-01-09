import { combineReducers } from "redux";
import { pageReducer } from "./page";
import { userReducer } from "./user";
import { pokemonReducer } from "./pokemon";

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  pokemons: pokemonReducer,
  next: pokemonReducer,
  offset: pokemonReducer
});
