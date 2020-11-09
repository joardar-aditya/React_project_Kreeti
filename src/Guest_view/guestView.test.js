import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ListOfGuests from './ListOfGuests'
import SearchResults from './SearchResults'
import Tags from './Tags'
import Guest from '../Guest';

it('enters Guest in tag list on Enter', () => {
  render(<Guest />);
  fireEvent.change(screen.getByPlaceholderText('Enter guest\'s name'), {
    target: {
      value: 'Aditya'
    }
  });
  fireEvent.keyPress(screen.getByPlaceholderText('Enter guest\'s name'), {
    key: 'Enter', code: 'Enter'
  });
  //Two elements one in the form of tag and one in the list of Guests would be there
  expect(screen.getAllByText('Aditya')).toHaveLength(2);
});

it('enters Guest in tag list on seperation', () => {
  render(<Guest />);
  fireEvent.change(screen.getByPlaceholderText('Enter guest\'s name'), {
    target: {
      value: 'Aditya'
    }
  });
  fireEvent.keyPress(screen.getByPlaceholderText('Enter guest\'s name'), {
    key: ',', code: 'Comma'
  });
  //Two elements one in the form of tag and one in the list of Guests would be there
  expect(screen.getAllByText('Aditya')).toHaveLength(2);
})
