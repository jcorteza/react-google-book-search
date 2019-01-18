import React from "react";
import API from "../utils/API";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({bookInput: e.target.value})
    }

    handleClick(e) {
        e.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    console.log("api.searchbooks was successful");
                }
            )
            .catch(
                (err) => {
                    console.log("api.searchbooks was unsuccessful");
                }
            );
    }

    render(){
        return(
            <div id="searchContainer">
                <h3>Book Search</h3>
                <form id="bookSearch">
                    <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                    <br></br>
                    <input type="text" name="bookInput" id="bookInput" form="bookSearch" value={this.state.bookInput} onChange={this.handleChange} placeholder="Book Title" required/>
                    <br></br>
                    <button type="submit" onClick={this.handleClick}>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;