import { fireEvent, render, screen , waitForElement } from '@testing-library/react';
import App from './App';

// test('renders without crashing', () => {
//   render(<App />);
//   const title = screen.getByText(/Last search/i);
//   expect(title).toBeInTheDocument();
// });

// test('renders without crashing asynch', async () => {
//   const {findByText} = render(<App />);
//   const title = await findByText(/Last search/i);
//   expect(title).toBeInTheDocument();
// });

// test('home work as expected', async () => {
//   const {container} = render(<App />)
//   const gifLink = await waitForElement(
//     () => container.querySelector('.Gif-link')
//   )
   
//   expect(gifLink).toBeVisible()
// })


test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' }})
  fireEvent.click(button)

const title = await screen.findByText('You are looking for ... Matrix')
// this could potentially fail if the network is very slow and the timeout is not 
// big enough
  expect(title).toBeVisible() 
})

