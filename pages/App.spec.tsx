import { render } from '@testing-library/react';
import App from './index';

test('sum', () => {
  const { getByText } = render(<App />);
});
