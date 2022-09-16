import { render, screen ,getByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store, { persistor } from "./redux/store";

import { renderWithProviders } from 'setUpTestStore';

test('renders learn react link', () => {
  renderWithProviders(<App />,{store});
  const linkElement = screen.getByText(/redux concepts/i);
  expect(linkElement).toBeInTheDocument();
});

// it("checking userdetails in screen" , () => {
  
//   const comp = render(<UserDetails/>)
//   const txt = comp.getByTestId("quote")
//   expect(txt).toBeInTheDocument()
  
// })