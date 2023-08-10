import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import classes from './style.module.scss';

const ShorteningInput = () => {
  return (
    <div>
      <Box component="form" className={classes.ShorteningBoxWrapper} noValidate autoComplete="off">
        <TextField
          inputProps={{
            style: { backgroundColor: 'var(--color-detailed-box)', fontSize: '16px' }, // Set width to 100%
          }}
          className={classes.Input}
          id="input"
          label="Shorten a link here ..."
          variant="outlined"
          //   onChange={handleChange}
        />
        <Button className={classes.Button}>Shorten It</Button>
        {/* {shortUrlError && <div className={classes.error}>{handleError()}</div>} */}
      </Box>
    </div>
  );
};

export default ShorteningInput;
