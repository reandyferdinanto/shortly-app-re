import { combineReducers } from 'redux';

import appReducer from '@containers/App/reducer';
import languageReducer, { storedKey as storedLangState } from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';

const storedReducers = {
  language: { reducer: languageReducer, whitelist: storedLangState },
};

const temporaryReducers = {
  app: appReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
