import React from 'react';
import '../Guest.css';
import ListOfGuests from '../Guest_view/ListOfGuests'
import SearchResults from '../Guest_view/SearchResults'
import Tags from '../Guest_view/Tags'

class Guest extends React.Component {
   constructor(props){
      super(props);
      this.state = {
        guests : ['Aditya', 'Abhay', 'Rahul', 'Devesh', 'Karan'],
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
          let current_tags = this.state.tags.map(val => val.toLowerCase());
          let value = this.state.query.toLowerCase();
          let guests = this.state.guests.map(val => val.toLowerCase());
          if ( current_tags.indexOf(value) < 0 && guests.indexOf(value) > -1 ) {
            current_tags = [...current_tags, value]
            let new_list = current_tags.map((val) => {
              return val[0].toUpperCase() + val.substring(1).toLowerCase()
            })
            this.setState({
                  tags: new_list,
                  query: '',
                  search_results: []
            })
          }else{
             alert('Guest Tag already available');
          }
       }
   }

   

   insertTagsOnEnter(event) {
       event.preventDefault();
        if(this.state.search_results.length > 0){
            let current_tags = this.state.tags;
            if(current_tags.indexOf(this.state.search_results[0]) < 0){
             this.setState({
                tags: [...current_tags, this.state.search_results[0]],
                query: '',
                search_results: []
             })
        }else {
          this.setState({
            query:'',
            search_results: []
          })
        }}else{
            this.setState({});
        }
    }
   
   
   enterTagsFromResults(value) {
       let current_tags = this.state.tags;
       let index = current_tags.indexOf(value)
       if(index < 0){
       this.setState(
           {
            tags: [...current_tags, value],
            search_results: []
           }
       )}else{
         alert('Guest name already present')
         this.setState({
           search_results: [],
           query: ''
         })
       }
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
     if(current_query.length > 0){
      let results = this.state.guests.filter(item => item.toLowerCase().indexOf(current_query.toLowerCase()) > -1);
      this.setState({
        search_results : results,
        query: current_query
     })}else{
        this.setState({
          search_results: [],
          query: ''
       })
     }
   }

   render(){
       return (
        <div className= "Guest container text-left">
            <form onSubmit={this.insertTagsOnEnter}>
            <div className="form-group">
            <label>Search for Guest List</label>
            <input type="search"
            placeholder="Enter guest's name"
            value = {this.state.query}
            onChange={this.handleChange}
            onKeyPress={this.seperateTags}
            className="form-control"/>
            {this.state.search_results.length > 0 && <SearchResults result={this.state.search_results} onclick={this.enterTagsFromResults}/>}
            </div>
            </form>
            <div>
             {this.state.tags.length > 0 && <Tags result={this.state.tags} removeTag={this.deleteTags}/>}
              <ListOfGuests result={this.state.guests} />
            </div>
        </div>
       );
   }
    
}

export default Guest;