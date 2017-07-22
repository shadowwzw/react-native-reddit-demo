import reduxTypesCreator from "./ReduxTypesCreator";
const actionTypes = reduxTypesCreator('GET_REDDITS');

export const { GET_REDDITS } = actionTypes;

export const getReddits = ({after} = {after: null}) => ({
  type: GET_REDDITS.SELF,
  after
});