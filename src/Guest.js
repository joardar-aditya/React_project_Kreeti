import React from 'react';
import './Guest.css';

const Tags = (props) => {
    const options = props.result.map((r,i) => (
        <span className="mx-2 p-2 bg-dark text-light" key={i}>
            <span className="mx-2">{r}</span> 
            <span onClick={() => props.delete(r)} className="mx-2 bg-light text-dark px-2">X</span>
        </span>
    ));
    return <div className="my-2">
        
        {options}</div>
}

const ListOfGuests= (props) => {
    const options = props.result.map((r,i) => (
        <li key={i}>
            {r}
        </li>
    ));
    return <div className="my-2">
        <h2>List of Guests</h2>
        <ul>{options}</ul></div>
}

const SearchResults = (props) =>{
    const options = props.result.map((r,i) => (
        <div className="SearchItems" onClick={() => props.onclick(r)}  key={i}>
            {r}
        </div>
    ));
    return <div className="container">
            {options}
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
       this.enterTagsFromResults = this.enterTagsFromResults.bind(this);
       this.deleteTags = this.deleteTags.bind(this);
       this.insertTagsOnEnter = this.insertTagsOnEnter.bind(this);
       this.seperateTags = this.seperateTags.bind(this);
   }


   seperateTags(event) {
       if(event.charCode === 44){
           event.preventDefault();
           let current_tags = this.state.tags;
           let value = this.state.query;
           let guests = this.state.guests.map(val => val.toLowerCase());
           if(current_tags.indexOf(value.toLowerCase()) <0 && guests.indexOf(value.toLowerCase()) > -1){
               current_tags.push(value);
               this.setState({
                   tags: current_tags,
                   query: ''
               })
           }
       }
   }

   

   insertTagsOnEnter(event) {
       event.preventDefault();
        if(this.state.search_results.length > 0){
            let current_tags = this.state.tags;
            console.log("i was called");
            if(current_tags.indexOf(this.state.search_results[0])){
             current_tags.push(this.state.search_results[0]);
             this.setState({
                tags: current_tags,
                query: ''
             })
        }}else{
            this.setState({});
        }
    }
   
   
   enterTagsFromResults(value) {
       let current_tags = this.state.tags;
       let index = current_tags.indexOf(value)
       if(index < 0){
       current_tags.push(value)    
       this.setState(
           {
               tags: current_tags
           }
       )}
   }

   deleteTags(value){
       let current_tags = this.state.tags;
       let value_index = current_tags.indexOf(value);
       if(value_index > -1){
           current_tags.splice(value_index, 1);
       }
       this.setState({
           tags: current_tags
       })
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
            <form onSubmit={this.insertTagsOnEnter}>
            <div className="form-group">
            <label>Search for Guest List</label>
            <input type="search"
            value = {this.state.query}
            onChange={this.handleChange}
            onKeyPress={this.seperateTags}
            className="form-control"/>
            {this.state.search_results.length > 0 && <SearchResults result={this.state.search_results} onclick={this.enterTagsFromResults}/>}
            </div>
            </form>
            <div>
             {this.state.tags.length > 0 && <Tags result={this.state.tags} delete={this.deleteTags}/>}
              <ListOfGuests result={this.state.guests} />
            </div>
        </div>
       );
   }
    
}

export default Guest;