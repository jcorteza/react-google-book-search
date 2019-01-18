import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookData: {}
        }
    }

    render() {
        return(
            <main>
                <SearchForm />
                <ResultsContainer />
            </main>
        );
    }
}

export default Search;