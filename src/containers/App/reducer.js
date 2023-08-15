import { produce } from 'immer';

import {
  SET_LOCAL,
  SET_THEME,
  SET_SHORT_URL,
  DELETE_SHORT_URL,
  SET_SHORT_URL_ERROR,
  SET_SHORT_URL_LOADING,
} from '@containers/App/constants';

export const initialState = {
  locale: 'id',
  theme: 'dark',
  shortUrl: [],
  shortUrlLoading: false,
  shortUrlError: {},
};

export const storedKey = ['locale'];

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
      case DELETE_SHORT_URL:
        draft.shortUrl = draft.shortUrl.filter((url) => url.code !== action.codeToDelete);
        break;
      case SET_SHORT_URL_LOADING:
        draft.shortUrlLoading = action.shortUrlLoading;
        break;
      case SET_SHORT_URL_ERROR:
        draft.shortUrlError = action.shortUrlError;
        break;
      default:
        break;
    }
  });

export default appReducer;
