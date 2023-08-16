import React from 'react';
import classes from './style.module.scss';
import ShorteningInput from '@components/ShorteningInput';
import { FormattedMessage } from 'react-intl';

const Section2 = () => {
  return (
    <div>
      <div className={classes.Section2}>
        <div className={classes.ShorteningInputWrapper}>
          <ShorteningInput />
        </div>
        <div className={classes.AdvancedWrapper}>
          <div className={classes.Advanced}>
            <FormattedMessage id="app_S2Advanced" />
          </div>
          <div className={classes.Track}>
            <FormattedMessage id="app_S2TextTrack1" />
            <br />
            <FormattedMessage id="app_S2TextTrack2" />
          </div>
        </div>
        <div className={classes.DetailedWrapper}>
          <hr />
          <div className={classes.DetailedBox1}>
            <div className={classes.Icon}></div>
            <div className={classes.DetailedTitle}>
              <FormattedMessage id="app_S2CardBrand" />
            </div>
            <div className={classes.DetailedDesc}>
              <FormattedMessage id="app_S2CardDesc1" />
            </div>
          </div>
          <div className={classes.DetailedBox2}>
            <div className={classes.Icon}></div>
            <div className={classes.DetailedTitle}>
              <FormattedMessage id="app_S2CardDetailed" />
            </div>
            <div className={classes.DetailedDesc}>
              <FormattedMessage id="app_S2CardDesc2" />
            </div>
          </div>
          <div className={classes.DetailedBox3}>
            <div className={classes.Icon}></div>
            <div className={classes.DetailedTitle}>
              <FormattedMessage id="app_S2CardFully" />
            </div>
            <div className={classes.DetailedDesc}>
              <FormattedMessage id="app_S2CardDesc3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
