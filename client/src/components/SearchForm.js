import React from "react";

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
        let bookTitle = this.state.bookInput;
        console.log(`This is the value of bookTitle: ${bookTitle.replace(/\s/g, "+")}`);
        console.log(`This is the value of key: ${process.env.GBOOKS_KEY}`);
        fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle.replace(/\s/g, "+")}&key=${process.env.GBOOKS_KEY}`
        ).then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (err) => {
                console.log(`There was an error callling Google Books API: ${err}`);
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