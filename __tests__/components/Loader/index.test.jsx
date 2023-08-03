import { render } from '@testing-library/react';

import Loader from '@components/Loader';

it('should match with snapshot', () => {
  const mockProps = {
    isLoading: true,
  };

  const loader = render(<Loader {...mockProps} />);

  expect(loader).toMatchSnapshot();
});
