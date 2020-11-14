import React, { Component } from 'react';

class ListOfGuests extends Component {
  render(props) {
    const {result} = this.props;
    const options = result.map((r,i) => (
      <li key={i}>
          {r}
      </li>
  ));
  return <div className="my-2">
  <h2>List of Guests</h2>
  <ul>{options}</ul></div>
  }
}

export default ListOfGuests;
