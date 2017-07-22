import reduxTypesCreator from "./ReduxTypesCreator";
const actionTypes = reduxTypesCreator('GET_REDDITS');

export const { GET_REDDITS } = actionTypes;

export const getReddits = (before) => ({
  type: GET_REDDITS.SELF,
  before
});