import React, { useState, useRef } from 'react';
import { Box, TextField, Button } from '@mui/material';
import classes from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getShortUrl } from '@containers/App/actions';
import { FormattedMessage } from 'react-intl';

const ShorteningInput = () => {
  const [cooldown, setCooldown] = useState(false);
  const shortUrl = useSelector((state) => state.app.shortUrl);
  const [inputValue, setInputValue] = useState('');
  const [copyStatus, setCopyStatus] = useState({});
  const [apiCallCount, setApiCallCount] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getShortUrl(inputValue));
    setApiCallCount(apiCallCount + 1);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
      }, 2000);
      dispatch(getShortUrl(inputValue));
      setApiCallCount(apiCallCount + 1);
    }
  };

  const renderContent = () => (
    <div className={classes.activeBox}>
      <div id="input_empty" />
    </div>
  );

  const handleCopyClick = (url) => {
    navigator.clipboard.writeText(url.short_link);
    setCopyStatus((prevStatus) => ({
      ...prevStatus,
      [url.code]: true,
    }));
  };

  return (
    <div>
      <Box component="form" className={classes.ShorteningBoxWrapper} noValidate autoComplete="off">
        <TextField
          inputProps={{
            style: { backgroundColor: 'var(--color-detailed-box)', fontSize: '18px' },
          }}
          className={classes.Input}
          id="input"
          label={<FormattedMessage id="app_LabelShorten" />}
          variant="outlined"
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
        <Button className={classes.Button} type="submit" onClick={handleSubmit} disabled={cooldown}>
          <FormattedMessage id="app_ButtonLabelShorten" />
        </Button>
        {/* {shortUrlError && <div className={classes.error}>{handleError()}</div>} */}
      </Box>

      {apiCallCount <= 3 ? (
        shortUrl.length > 0 ? (
          shortUrl?.map((url) => (
            <Box key={url.code} className={classes.activeBox}>
              <TextField
                inputProps={{ style: { color: '#000000' } }}
                className={classes.activeTextFieldBox}
                id="input"
                label=""
                variant="outlined"
                value={url.original_link}
                style={{ flex: 1, marginRight: '1px' }}
              />
              <TextField
                inputProps={{ style: { color: 'hsl(255, 11%, 22%)' } }}
                className={classes.activeTextFieldBox}
                id="input"
                label=""
                variant="outlined"
                value={url.short_link}
                style={{ flex: 1, marginLeft: '1px' }}
              />
              <Button
                variant="contained"
                className={classes.activeButtonCopy}
                style={{
                  color: 'white',
                  backgroundColor: copyStatus[url.code] ? 'hsl(260, 8%, 14%)' : 'var(--color-button-cyan)',
                }}
                onClick={() => handleCopyClick(url)}
              >
                {copyStatus[url.code] ? 'Copied' : 'Copy'}
              </Button>
            </Box>
          ))
        ) : (
          renderContent()
        )
      ) : (
        <div className={classes.errorMessage}>Please refresh the page</div>
      )}
    </div>
  );
};

export default ShorteningInput;
