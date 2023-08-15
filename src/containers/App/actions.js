import {
  SET_LOCAL,
  SET_THEME,
  GET_SHORT_URL,
  SET_SHORT_URL,
  DELETE_SHORT_URL,
  SET_SHORT_URL_ERROR,
  SET_SHORT_URL_LOADING,
} from '@containers/App/constants';

export const setLocale = (locale) => ({
  type: SET_LOCAL,
  locale,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  theme,
});

export const getShortUrl = (url) => ({
  type: GET_SHORT_URL,
  url,
});

export const setShortUrl = (shortUrl) => ({
  type: SET_SHORT_URL,
  shortUrl,
});

export const deleteShortUrl = (codeToDelete) => ({
  type: DELETE_SHORT_URL,
  codeToDelete,
});

export const setShortUrlLoading = (shortUrlLoading) => ({
  type: SET_SHORT_URL_LOADING,
  shortUrlLoading,
});

export const setShortUrlError = (shortUrlError) => ({
  type: SET_SHORT_URL_ERROR,
  shortUrlError,
});
