import React from 'react';
import classes from './style.module.scss';
import { FormattedMessage } from 'react-intl';

const Section3 = () => {
  return (
    <div>
      <div className={classes.Wrapper}>
        <div className={classes.TitleS3}>
          <FormattedMessage id="app_S3TitleBoost" />
        </div>
        <button className={classes.GetStarted}>
          <FormattedMessage id="app_S3Button" />
        </button>
      </div>
    </div>
  );
};

export default Section3;
