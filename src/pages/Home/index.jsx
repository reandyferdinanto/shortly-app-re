import classes from './style.module.scss';
import Section1 from './Section1/index';
import Section2 from './Section2/index';
import Section3 from './Section3/index';
import Section4 from './Section4/index';

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
