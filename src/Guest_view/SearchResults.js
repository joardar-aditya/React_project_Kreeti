import React, {Component} from 'react';

class SearchResults extends Component {
  render() {
    const {result, onclick} = this.props;
    const options = result.map((r,i) => (
      <div className="SearchItems border border-dark rounded  p-2 my-2" onClick={() => onclick(r)}  key={i}>
      {r}
  </div>
    ));
    return <div className="container">
              {options}
           </div>
  }
}

export default SearchResults;
