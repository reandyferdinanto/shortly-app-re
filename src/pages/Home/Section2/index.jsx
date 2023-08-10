import React from 'react';
import classes from './style.module.scss';
import ShorteningInput from '@components/ShorteningInput';

const Section2 = () => {
  return (
    <div>
      <div className={classes.Section2}>
        <div className={classes.ShorteningInputWrapper}>
          <ShorteningInput />
        </div>
        <div className={classes.AdvancedWrapper}>
          <div className={classes.Advanced}>Advanced Statistic</div>
          <div className={classes.Track}>
            Track how your links are performing across the web <br />
            our advanced statistic dashboard
          </div>
        </div>
        <div className={classes.DetailedWrapper}>
          <hr />
          <div className={classes.DetailedBox1}>
            <div className={classes.Icon}></div>
            <div className={classes.DetailedTitle}>Brand Recognition</div>
            <div className={classes.DetailedDesc}>
              Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
              confidence in your content.
            </div>
          </div>
          <div className={classes.DetailedBox2}>
            <div className={classes.Icon}></div>
            <div className={classes.DetailedTitle}>Detailed Records</div>
            <div className={classes.DetailedDesc}>
              Gain insight into who is clicking your links. Knowing when and where people engage with your content helps
              inform better decision.
            </div>
          </div>
          <div className={classes.DetailedBox3}>
            <div className={classes.Icon}></div>
            <div className={classes.DetailedTitle}>Fully Customizable</div>
            <div className={classes.DetailedDesc}>
              Improve brand awareness and content discoverability through customizable links, supercharging audience
              engagement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
