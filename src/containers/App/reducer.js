import { produce } from 'immer';

import {
  SET_LOCAL,
  SET_THEME,
  SET_SHORT_URL,
  SET_SHORT_URL_LOADING,
  SET_SHORT_URL_ERROR,
} from '@containers/App/constants';

export const initialState = {
  locale: 'id',
  theme: 'dark',
  shortUrl: [],
  shortUrlLoading: false,
  shortUrlError: null,
};

export const storedKey = ['locale', 'theme', 'shortUrl'];

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOCAL:
        draft.locale = action.locale;
        break;
      case SET_THEME:
        draft.theme = action.theme;
        break;
      case SET_SHORT_URL:
        draft.shortUrl = [...draft.shortUrl, action.shortUrl];
        break;
      case SET_SHORT_URL_LOADING:
        draft.shortUrlLoading = action.shortUrlLoading;
        break;
      case SET_SHORT_URL_ERROR:
        draft.shortUrlError = action.shortUrlError;
        break;
    }
  });

export default appReducer;
