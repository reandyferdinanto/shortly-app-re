import React from 'react';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const Section1 = () => {
  return (
    <>
      <div className={classes.Wrapper}>
        <div className={classes.LeftContainer}>
          <div className={classes.TextMore}>
            <div className={classes.TextMore1}>
              <FormattedMessage id="app_MainTitle1" />
            </div>
            <div className={classes.TextMore2}>
              <FormattedMessage id="app_MainTitle2" />
            </div>
          </div>
          <div className={classes.SubTitle}>
            <FormattedMessage id="app_TextBuild1" /> <br /> <FormattedMessage id="app_TextBuild2" />
          </div>
          <button className={classes.GetStarted}>
            <FormattedMessage id="app_GetStartedButton" />
          </button>
        </div>
        <div className={classes.RightContainer}>
          <div className={classes.Illustration}></div>
        </div>
      </div>
    </>
  );
};

export default Section1;
