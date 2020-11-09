import React,  {Component} from 'react';

class Tags extends Component {
  render(props) {
    const {result, removeTag} = this.props;
    const options = result.map((r,i) => {
      return <span className="mx-2 p-2 bg-dark text-light border rounded " key={i}>
            <span className="mx-2">{r}</span> 
            <span onClick={() => removeTag(r)} className="mx-2 bg-light text-dark px-2 border rounded">X</span>
        </span>
    });
    return(
      <div className="my-2">
        
        {options}</div>
    );
  }
}

export default Tags;
