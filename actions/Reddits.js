import reduxTypesCreator from "./ReduxTypesCreator";
const actionTypes = reduxTypesCreator('GET_REDDITS');

export const { GET_REDDITS } = actionTypes;

export const getReddits = ({after, count } = {after: null, count: 0}) => ({
  type: GET_REDDITS.SELF,
  after,
  count,
});