import reduxTypesCreator from "./ReduxTypesCreator";
const actionTypes = reduxTypesCreator('GET_SUBREDDITS');

export const { GET_SUBREDDITS } = actionTypes;

export const getSubreddits = ({after, count } = {after: null, count: 0}) => ({
  type: GET_SUBREDDITS.SELF,
  after,
  count,
});