import { createActions, createReducer } from "reduxsauce";
import Immutable, { ImmutableObject } from "seamless-immutable";

const tag = "[APP_REDUX]";

const functionDefinitions = {
  startup: null
};

const { Types, Creators } = createActions(functionDefinitions);
export const AppActionTypes = Types;
export default Creators;

export const AppInitState = {};

export const INITIAL_STATE = Immutable(AppInitState);

export const startup = (state: ImmutableObject<typeof AppInitState>) => {
  console.log(`${tag} Startup caught in sagaAuthRedux/startup function`);
  return state.merge(AppInitState);
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup
});
