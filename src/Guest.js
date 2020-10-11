import React from 'react';

const ListOfResults= (props) => {
    const options = props.result.map((r,i) => (
        <li key={i}>
            {r}
        </li>
    ));
    return <ul>{options}</ul>
}

const SearchResults = (props) =>{
    const options = props.result.map((r,i) => (
        <li key={i}>
            {r}
        </li>
    ));
    return <div>
        <h3>Search Suggestions</h3>
        <ul>
            {options}
        </ul>
    </div>
}
class Guest extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        guests : ["Aditya", "Abhay", "Rahul", "Devesh", "Karan"],
        search_results: [],
        query: '',
        tags: []
       }
       this.handleChange = this.handleChange.bind(this);
   }


   handleChange(event) {
     let current_query = event.target.value;
     let results = this.state.guests.filter(item => item.toLowerCase().indexOf(current_query.toLowerCase()) > -1);
     this.setState({
         search_results : results,
         query: current_query
     })   
   }

   render(){
       return (
        <div className= "Guest container text-left">
            <form>
            <div className="form-group">
            <label for="search">Search for Guest List</label>
            <input type="search"
            value = {this.state.query} 
            onChange={this.handleChange}
            className="form-control"/>
            </div>
            </form>
            <div>
              {this.state.search_results.length > 0 && <SearchResults result={this.state.search_results}/>}
              <ListOfResults result={this.state.guests} />
            </div>
        </div>
       );
   }
    
}

export default Guest;