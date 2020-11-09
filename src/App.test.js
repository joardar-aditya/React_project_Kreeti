import React from 'react';
import { fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

it('renders Search lable', () => {
  render(<App />);
  expect(screen.getByText('Search for Guest List')).toBeInTheDocument();
});
