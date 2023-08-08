import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const Home = () => (
  <div>
    <div className={classes.Wrapper}>
      <div className={classes.LeftContainer}>
        <div className={classes.TextMore}>
          <FormattedMessage id="app_MainTitle1" /> <br />
          <FormattedMessage id="app_MainTitle2" />
        </div>
        <div className={classes.SubTitle}>
          Build your brand's recognition and get detailed <br /> insight on how your links are performing
        </div>
        <button className={classes.GetStarted}>Get Started</button>
      </div>
      <div className={classes.RightContainer}></div>
    </div>
  </div>
);

export default Home;
