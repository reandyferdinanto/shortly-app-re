import React from 'react';
import classes from './style.module.scss';
// import Facebook from '../../../static/images/icon-facebook.svg';
// import Twitter from '../../../static/images/icon-twitter.svg';
// import Pinterest from '../../../static/images/icon-pinterest.svg';
// import Instagram from '../../../static/images/icon-instagram.svg';

const Section4 = () => {
  return (
    <div>
      <div className={classes.FooterWrapper}>
        <div className={classes.Logo}>
          <div className={classes.Shortly}>Shortly</div>
        </div>
        <div className={classes.MenuWrapper}>
          <div className={classes.Features}>
            <div className={classes.FeaTitle}>Features</div>
            <div className={classes.FeaContent}>
              <div className={classes.Content}>Link Shortening</div>
              <div className={classes.Content}>Branded Link</div>
              <div className={classes.Content}>Analytics</div>
            </div>
          </div>
          <div className={classes.Resources}>
            <div className={classes.ResTitle}>Resources</div>
            <div className={classes.ResContent}>
              <div className={classes.Content}>Blog</div>
              <div className={classes.Content}>Developers</div>
              <div className={classes.Content}>Support</div>
            </div>
          </div>
          <div className={classes.Company}>
            <div className={classes.CompTitle}>Company</div>
            <div className={classes.CompContent}>
              <div className={classes.Content}>About</div>
              <div className={classes.Content}>Our Team</div>
              <div className={classes.Content}>Careers</div>
              <div className={classes.Content}>Contact</div>
            </div>
          </div>
        </div>

        <div className={classes.SocialsWrapper}>
          <div className={classes.IconFacebook}></div>
          <div className={classes.IconTwitter}></div>
          <div className={classes.IconPinterest}></div>
          <div className={classes.IconInstagram}></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
